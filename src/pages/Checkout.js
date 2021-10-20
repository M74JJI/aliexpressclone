import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {
    getUserCart,
    emptyUserCart,
    saveUserAddress,
    applyCoupon,
    createCashOrderForUser,
    userCart,
} from '../functions/user';
import { IoIosArrowForward } from 'react-icons/io';
import { RiHeart2Line, RiDeleteBinLine } from 'react-icons/ri';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/chekout.css';
import ShippingModal from '../components/ShippingAddressModal/ShippingModal';
const Checkout = ({ history }) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [address, setAddress] = useState({});
    const [dejaAddress, setDejaAddress] = useState([]);
    const [addressSaved, setAddressSaved] = useState(false);
    const [coupon, setCoupon] = useState('');
    const [showShipping, setShowShipping] = useState(false);
    // discount price
    const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
    const [discountError, setDiscountError] = useState('');

    const dispatch = useDispatch();
    const { user, COD, cart } = useSelector((state) => ({ ...state }));
    const couponTrueOrFalse = useSelector((state) => state.coupon);

    useEffect(() => {
        getUserCart(user.token).then((res) => {
            setProducts(res.data.products);
            setTotal(res.data.cartTotal);
            setAddress(res.data.orderdBy.address);
        });
    }, [total, address]);

    const emptyCart = () => {
        // remove from local storage
        if (typeof window !== 'undefined') {
            localStorage.removeItem('cart');
        }
        // remove from redux
        dispatch({
            type: 'ADD_TO_CART',
            payload: [],
        });
        // remove from backend
        emptyUserCart(user.token).then((res) => {
            setProducts([]);
            setTotal(0);
            setTotalAfterDiscount(0);
            setCoupon('');
            toast.success('Cart is emapty. Contniue shopping.');
        });
    };

    const saveAddressToDb = () => {
        // console.log(address);
        saveUserAddress(user.token, address).then((res) => {
            if (res.data.ok) {
                setAddressSaved(true);
                toast.success('Address saved');
            }
        });
    };

    const applyDiscountCoupon = () => {
        console.log('send coupon to backend', coupon);
        applyCoupon(user.token, coupon).then((res) => {
            console.log('RES ON COUPON APPLIED', res.data);
            if (res.data) {
                setTotalAfterDiscount(res.data);
                // update redux coupon applied true/false
                dispatch({
                    type: 'COUPON_APPLIED',
                    payload: true,
                });
            }
            // error
            if (res.data.err) {
                setDiscountError(res.data.err);
                // update redux coupon applied true/false
                dispatch({
                    type: 'COUPON_APPLIED',
                    payload: false,
                });
            }
        });
    };

    const showProductSummary = () =>
        products.map((p, i) => (
            <div key={i}>
                <p>
                    {p.product.title} ({p.color}) x {p.count} ={' '}
                    {p.product.price * p.count}
                </p>
            </div>
        ));

    const applyUserCoupon = () => {
        applyCoupon(user.token, coupon).then((res) => {
            if (res.data) {
                setTotalAfterDiscount(res.data);
                // update redux coupon applied
                dispatch({
                    type: 'COUPON_APPLIED',
                    payload: true,
                });
            }
            // error
            if (res.data.err) {
                setDiscountError(res.data.err);
                // update redux coupon applied
            }
        });
    };

    const createCashOrder = () => {
        createCashOrderForUser(user.token, COD, couponTrueOrFalse).then(
            (res) => {
                console.log('USER CASH ORDER CREATED RES ', res);
                // empty cart form redux, local Storage, reset coupon, reset COD, redirect
                if (res.data.ok) {
                    // empty local storage
                    if (typeof window !== 'undefined')
                        localStorage.removeItem('cart');
                    // empty redux cart
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: [],
                    });
                    // empty redux coupon
                    dispatch({
                        type: 'COUPON_APPLIED',
                        payload: false,
                    });
                    // empty redux COD
                    dispatch({
                        type: 'COD',
                        payload: false,
                    });
                    // mepty cart from backend
                    emptyUserCart(user.token);
                    // redirect
                    setTimeout(() => {
                        history.push('/user/orders');
                    }, 1000);
                }
            }
        );
    };
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
    return (
        <div className="checkout">
            {showShipping && (
                <ShippingModal
                    showShipping={showShipping}
                    setShowShipping={setShowShipping}
                />
            )}

            <div className="checkout-header">
                <Link className="checkout-logo"></Link>
            </div>

            <div className="checkout-container">
                <div className="chekout-left">
                    <div className="chekout-shipping">
                        <h5>
                            <strong>Shipping Information</strong>
                        </h5>
                        {address ? (
                            <div className="address-container">
                                <div className="address-checkout">
                                    <strong>
                                        {address.name}, &nbsp;{' '}
                                        {address.phoneNumber}
                                    </strong>
                                    <span>{address.address1}</span>
                                    <span>{address.address2}</span>
                                    <span>
                                        {address.state},{address.city},
                                        {address.country},{address.zipCode}
                                    </span>
                                </div>
                                <div className="add-address">
                                    <Link onClick={() => setShowShipping(true)}>
                                        + Add new address
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <Link onClick={() => setShowShipping(true)}>
                                + Add new address
                            </Link>
                        )}
                    </div>
                    <div className="checkout-method">
                        <h5>
                            <strong>Payment Method</strong>
                        </h5>
                        <span>Credit Card</span>
                    </div>
                    <div className="checkout-products">
                        {!cart.length ? (
                            <p>No products in cart.</p>
                        ) : (
                            cart.map((p) => (
                                <div className="checkout-cart-item">
                                    <div className="checkout-cart-product">
                                        <img src={p.images[0].url} alt="" />
                                        <div className="cart-product-infos">
                                            <div className="cart-product-title">
                                                {p.title}
                                            </div>
                                            <div className="cart-product-color">
                                                <span>Color : </span>
                                                <span>red</span>
                                            </div>
                                            <p>
                                                {p.title.substring(0, 10)}
                                                ... x {p.qty} = $
                                                {p.price * p.qty}
                                            </p>
                                            <div className="cart-product-price">
                                                US ${p.price}
                                            </div>
                                            <div className="cart-product-discount">
                                                <span>US ${p.priceBefore}</span>
                                                <span>New User BONUS</span>
                                            </div>
                                            <div className="cart-product-shipping">
                                                <span class="shippingfreeotNot ">
                                                    Free Shipping
                                                </span>
                                                <span>
                                                    via Cainiao Super Economy
                                                    Global Estimated delivery on
                                                    Nov 10
                                                </span>
                                                <IoIosArrowForward
                                                    style={{
                                                        marginTop: '3px',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="cart-product-operations">
                                            <div className="cart-wishlist-delete">
                                                <RiHeart2Line />
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
                <div className="chekout-right">
                    {' '}
                    <div className="chekout-summary">
                        <h2>Order Summary</h2>
                        <div className="coupon-select"></div>
                        <div className="coupon-select"></div>
                        <span style={{ paddingLeft: '1rem' }}>Promo Code</span>
                        <div className="coupon-input">
                            <input
                                type="text"
                                onChange={(e) => {
                                    setCoupon(e.target.value);
                                    setDiscountError('');
                                }}
                                value={coupon}
                            />
                            <button onClick={applyUserCoupon}>Apply</button>
                        </div>
                        <hr />
                        <div className="total">
                            <strong>Total</strong>
                            <div className="total-price">
                                <h4>US ${total}</h4>
                                <span>Approximately MAD 13dh</span>
                            </div>
                        </div>
                        {totalAfterDiscount > 0 && (
                            <div className="coupon-applied">
                                Coupon Applied :{' '}
                                <strong>-US{totalAfterDiscount}</strong>
                            </div>
                        )}
                        {COD ? (
                            <button
                                className="placeOrder-btn"
                                onClick={createCashOrder}
                            >
                                Place Order
                            </button>
                        ) : (
                            <button
                                className="placeOrder-btn"
                                onClick={() => history.push('/payment')}
                            >
                                Place Order
                            </button>
                        )}
                    </div>
                    <p>
                        Upon clicking "Place Order", I confirm I have read and
                        acknowledge all{' '}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

{
    /*<div className="row">
      <div className="col-md-6">
        <h4>Delivery Address</h4>
        <br />
        <br />
        {showAddress()}
        <hr />
        <h4>Got Coupon?</h4>
        <br />
        {showApplyCoupon()}
        <br />
        {discountError && <p className="bg-danger p-2">{discountError}</p>}
      </div>

      <div className="col-md-6">
        <h4>Order Summary</h4>
        <hr />
        <p>Products {products.length}</p>
        <hr />
        {showProductSummary()}
        <hr />
        <p>Cart Total: {total}</p>

        {totalAfterDiscount > 0 && (
          <p className="bg-success p-2">
            Discount Applied: Total Payable: ${totalAfterDiscount}
          </p>
        )}

        <div className="row">
          <div className="col-md-6">
            {COD ? (
              <button
                className="btn btn-primary"
                disabled={!addressSaved || !products.length}
                onClick={createCashOrder}
              >
                Place Order
              </button>
            ) : (
              <button
                className="btn btn-primary"
                disabled={!addressSaved || !products.length}
                onClick={() => history.push("/payment")}
              >
                Place Order
              </button>
            )}
          </div>

          <div className="col-md-6">
            <button
              disabled={!products.length}
              onClick={emptyCart}
              className="btn btn-primary"
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div> */
}
