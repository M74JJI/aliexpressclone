import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckout from '../components/StripeCheckout';
import '../stripe.css';
import '../styles/payment.css';
import { useSelector } from 'react-redux';
import { getUserCart } from '../functions/user';
import { Link } from 'react-router-dom';
// load stripe outside of components render to avoid recreating stripe object on every render
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
    const { cart, user } = useSelector((state) => ({ ...state }));
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [address, setAddress] = useState({});
    useEffect(() => {
        getUserCart(user.token).then((res) => {
            setProducts(res.data.products);
            setTotal(res.data.cartTotal);
            setAddress(res.data.orderdBy.address);
        });
    });
    return (
        <main className="main">
            <header className="payment-header">
                <img
                    src="https://ae01.alicdn.com/kf/He14c7c1dc7d84a1fa9a60aba6156278dq.png"
                    alt=""
                    style={{ height: '40px' }}
                />
            </header>
            <div className="payment-checkout-left">
                <form className="payment-form">
                    <p className="instruction">
                        don't change informations unles it's necessary
                    </p>
                    <section className="form-section">
                        <h2>Shipping & Billing Information</h2>
                        <fieldset>
                            <label>
                                <span>Name</span>
                                <input
                                    type="text"
                                    value={address.name}
                                    disabled
                                    className="field"
                                />
                            </label>
                            <label>
                                <span>Phone Number</span>
                                <input
                                    type="text"
                                    value={address.phoneNumber}
                                    disabled
                                    className="field"
                                />
                            </label>
                            <label>
                                <span>Address</span>
                                <input
                                    type="text"
                                    value={`${address.address1}, ${address.address2}`}
                                    disabled
                                    className="field"
                                />
                            </label>
                            <label>
                                <span>Country</span>
                                <input
                                    type="text"
                                    value={address.country}
                                    disabled
                                    className="field"
                                />
                            </label>
                            <label>
                                <span>City</span>
                                <input
                                    type="text"
                                    value={address.city}
                                    disabled
                                    className="field"
                                />
                            </label>
                            <label>
                                <span>Zip Code</span>
                                <input
                                    type="text"
                                    value={address.zipCode}
                                    disabled
                                    className="field"
                                />
                            </label>
                        </fieldset>
                        <Elements stripe={promise}>
                            <StripeCheckout />
                        </Elements>
                    </section>
                </form>
            </div>
            <aside className="summary">
                <header className="payment-header1">
                    <h1>Order Summary</h1>
                </header>
                <div className="payment-items">
                    {products.map((p) => (
                        <div className="payment-item">
                            <img class="image" src={p.product.images[0].url} />
                            <div className="payment-item-title">
                                <p className="payment-item-title-label">
                                    {p.product.title.substring(0, 50)}
                                </p>
                                <p className="payment-item-title-color">
                                    {p.color && p.color}
                                </p>
                            </div>
                            <p className="payment-item-count">
                                {p.qty} x $ {p.product.price}
                            </p>
                            <p className="payment-item-price">
                                ${p.qty * p.product.price}
                            </p>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="payment-total">
                    <div className="payment-subtotal">
                        <p>Subtotal</p>
                        <p className="payment-item-price">${total}</p>
                    </div>
                    <div className="payment-subtotal">
                        <p>Shipping</p>
                        <p className="payment-item-price">free</p>
                    </div>
                    <div className="payment-subtotal">
                        <p style={{ fontSize: '20px' }}>Total</p>
                        <p
                            className="payment-item-price"
                            style={{ fontSize: '20px' }}
                        >
                            ${total}
                        </p>
                    </div>
                </div>
            </aside>
        </main>
    );
};

export default Payment;
