import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import ProductCardInCheckout from '../components/cards/ProductCardInCheckout';
import { addToWishlist, userCart } from '../functions/user';
import Header from '../components/nav/header/Header';
import { IoIosArrowForward } from 'react-icons/io';
import { RiHeart2Line, RiDeleteBinLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
const Cart = ({ history }) => {
    const { cart, user } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();

    const getTotal = () => {
        return cart
            .reduce((currentValue, nextValue) => {
                return currentValue + nextValue.qty * nextValue.price;
            }, 0)
            .toFixed(2);
    };

    const saveOrderToDb = () => {
        // console.log("cart", JSON.stringify(cart, null, 4));
        userCart(cart, user.token)
            .then((res) => {
                console.log('CART POST RES', res);
                if (res.data.ok) history.push('/checkout');
            })
            .catch((err) => console.log('cart save err', err));
    };
    const handleAddToWishlist = (p, e) => {
        e.preventDefault();
        addToWishlist(p._id, user.token).then((res) => {
            console.log('ADDED TO WISHLIST', res.data);
            toast.success('added to wishlist');
            // history.push('/user/wishlist');
        });
    };
    const saveCashOrderToDb = () => {
        // console.log("cart", JSON.stringify(cart, null, 4));
        dispatch({
            type: 'COD',
            payload: true,
        });
        userCart(cart, user.token)
            .then((res) => {
                console.log('CART POST RES', res);
                if (res.data.ok) history.push('/checkout');
            })
            .catch((err) => console.log('cart save err', err));
    };

    const showCartItems = () => (
        <table className="table table-bordered">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Color</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Shipping</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>

            {cart.map((p) => (
                <ProductCardInCheckout key={p._id} p={p} />
            ))}
        </table>
    );

    const handleRemove = (p) => {
        // console.log(p._id, "to remove");
        let cart = [];

        if (typeof window !== 'undefined') {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            // [1,2,3,4,5]
            cart.map((product, i) => {
                if (product._id === p._id) {
                    cart.splice(i, 1);
                }
            });

            localStorage.setItem('cart', JSON.stringify(cart));
            dispatch({
                type: 'ADD_TO_CART',
                payload: cart,
            });
        }
    };
    return (
        <div
            className="cart-page"
            style={{ backgroundColor: cart.length > 0 ? '#e4e4e4' : '' }}
        >
            <Header />
            <div className="cart-container">
                {cart.length ? (
                    <>
                        <div className="cart-left">
                            <div className="cart-left-title">
                                <h4>Shopping Cart({cart.length})</h4>
                            </div>
                            <div className="cart-items">
                                {!cart.length ? (
                                    <p>No products in cart.</p>
                                ) : (
                                    cart.map((p) => (
                                        <div className="cart-item">
                                            <div className="cart-header">
                                                <div className="cart-header-left">
                                                    <Link>
                                                        SPLOV Official Store
                                                    </Link>
                                                </div>
                                                <span>Get Coupons</span>
                                            </div>

                                            <div className="cart-product">
                                                <img
                                                    src={p.images[0].url}
                                                    alt=""
                                                />
                                                <div className="cart-product-infos">
                                                    <div className="cart-product-title">
                                                        {p.title}
                                                    </div>
                                                    <div className="cart-product-color">
                                                        <span>Color : </span>
                                                        <span>red</span>
                                                    </div>
                                                    <p>
                                                        {p.title.substring(
                                                            0,
                                                            10
                                                        )}
                                                        ... x {p.qty} = $
                                                        {p.price * p.qty}
                                                    </p>
                                                    <div className="cart-product-price">
                                                        US ${p.price}
                                                    </div>
                                                    <div className="cart-product-discount">
                                                        <span>
                                                            US ${p.priceBefore}
                                                        </span>
                                                        <span>
                                                            New User BONUS
                                                        </span>
                                                    </div>
                                                    <div className="cart-product-shipping">
                                                        <span class="shippingfreeotNot ">
                                                            Free Shipping
                                                        </span>
                                                        <span>
                                                            via Cainiao Super
                                                            Economy Global
                                                            Estimated delivery
                                                        </span>
                                                        <IoIosArrowForward
                                                            style={{
                                                                marginTop:
                                                                    '3px',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="cart-product-operations">
                                                    <div className="cart-wishlist-delete">
                                                        <RiHeart2Line
                                                            onClick={(e) =>
                                                                handleAddToWishlist(
                                                                    p,
                                                                    e
                                                                )
                                                            }
                                                        />
                                                        <RiDeleteBinLine
                                                            onClick={() =>
                                                                handleRemove(p)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="cart-right">
                            <div className="cart-summary">
                                <h2 className="cart-summary-title">
                                    Order Summary
                                </h2>
                                <div className="cart-subtotal-shipping">
                                    <span>Subtotal</span>
                                    <span>US ${getTotal()}</span>
                                </div>
                                <div className="cart-subtotal-shipping">
                                    <span>Shipping</span>
                                    <span>US $0.00</span>
                                </div>
                                <div className="cart-total">
                                    <span>Total</span>
                                    <span>US ${getTotal()}</span>
                                </div>
                                {user && user.token ? (
                                    <>
                                        {' '}
                                        <button
                                            className="cart-btn"
                                            onClick={saveOrderToDb}
                                        >
                                            Buy
                                        </button>
                                        <button
                                            className="cart-btn"
                                            onClick={saveCashOrderToDb}
                                        >
                                            Pay Cash on Delievery
                                        </button>
                                    </>
                                ) : (
                                    <Link
                                        className="cart-link"
                                        to={{
                                            pathname: '/login',
                                            state: { from: 'cart' },
                                        }}
                                    >
                                        Login to Checkout
                                    </Link>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="cart-empty">
                        <div className="cart-empty-logo"></div>
                        <h2>Your Shopping Cart is empty</h2>
                        <p>
                            <Link to="/shop">
                                Don't miss out on great deals! Start shopping
                            </Link>
                            or
                            <Link>log in</Link> to view products added.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;

{
    /*
 <div className="row">
                <div className="col-md-8">
                    <h4>Cart / {cart.length} Product</h4>

                    {!cart.length ? (
                        <p>
                            No products in cart.{' '}
                            <Link to="/shop">Continue Shopping.</Link>
                        </p>
                    ) : (
                        showCartItems()
                    )}
                </div>
                <div className="col-md-4">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Products</p>
                    {cart.map((c, i) => (
                        <div key={i}>
                            <p>
                                {c.title} x {c.qty} = ${c.price * c.qty}
                            </p>
                        </div>
                    ))}
                    <hr />
                    Total: <b>${getTotal()}</b>
                    <hr />
                    {user ? (
                        <>
                            <button
                                onClick={saveOrderToDb}
                                className="btn btn-sm btn-primary mt-2"
                                disabled={!cart.length}
                            >
                                Proceed to Checkout
                            </button>
                            <br />
                            <button
                                onClick={saveCashOrderToDb}
                                className="btn btn-sm btn-warning mt-2"
                                disabled={!cart.length}
                            >
                                Pay Cash on Delivery
                            </button>
                        </>
                    ) : (
                        <button className="btn btn-sm btn-primary mt-2">
                            <Link
                                to={{
                                    pathname: '/login',
                                    state: { from: 'cart' },
                                }}
                            >
                                Login to Checkout
                            </Link>
                        </button>
                    )}
                </div>
            </div>
*/
}
