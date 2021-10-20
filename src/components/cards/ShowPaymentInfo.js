import React from 'react';
import '../../styles/userOrders.css';
const ShowPaymentInfo = ({ order, showStatus = true }) => (
    <div className="Payment-Info">
        <p>
            <span>Order ID:</span>
            <span> {order.paymentIntent.id}</span>
            <br />
            <span>Amount:{'  '}</span>
            <span>
                {(order.paymentIntent.amount /= 100).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}
            </span>
            <br />
            <span>Currency: </span>
            <span>{order.paymentIntent.currency.toUpperCase()}</span>
            <br />
            <span>Payment Method: </span>
            <span>{order.paymentIntent.payment_method_types[0]}</span>
            <br />
            <span>Payment: </span>
            <span>{order.paymentIntent.status.toUpperCase()}</span>
            {',  '}
            <span>
                Orderd on: {'  '}
                {new Date(order.paymentIntent.created * 1000).toLocaleString()}
            </span>
            {',  '}
            <br />
            {showStatus && (
                <span className="badge bg-primary text-white status-span">
                    STATUS: {order.orderStatus}
                </span>
            )}
        </p>
    </div>
);

export default ShowPaymentInfo;
