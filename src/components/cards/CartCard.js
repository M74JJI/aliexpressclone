import React from 'react';
import '../../styles/CartCard.css';
function CartCard({ cart }) {
    const getTotal = () => {
        return cart.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.qty * nextValue.price;
        }, 0);
    };
    return (
        <div className="shopping-cart">
            <div className="shopping-cart-header">
                <i className="fa fa-shopping-cart cart-icon" />
                <span className="badge">{cart.length}</span>
                <div className="shopping-cart-total">
                    <span className="lighter-text">Total:</span>
                    <span className="main-color-text">
                        <b> ${getTotal()}</b>
                    </span>
                </div>
            </div>{' '}
            {/*end shopping-cart-header */}
            <ul className="shopping-cart-items">
                {cart.map((p, i) => (
                    <li className="clearfix" key={i}>
                        <img src={p.images[0].url} alt="item1" />
                        <span className="item-name">
                            {p.title.substring(0, 20)}...
                        </span>
                        <span className="item-price">${p.price}</span>
                        <span className="item-quantity">Quantity: {p.qty}</span>
                    </li>
                ))}
            </ul>
            <a href="#" className="button">
                Checkout
            </a>
        </div>
    );
}

export default CartCard;
