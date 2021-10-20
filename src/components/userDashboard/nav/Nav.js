import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
function Nav({ isCurrentPage, ordersPage, passwordPage }) {
    return (
        <div className="userNav-menu">
            <h5>Orders</h5>
            <Link to="/user/orders" className={passwordPage && 'selected-nav'}>
                All orders
            </Link>
            <Link>Refund & Disputes</Link>
            <Link>Deleted & Orders</Link>
            <Link>Manage Feedback</Link>
            <Link
                to="/user/password"
                className={passwordPage && 'selected-nav'}
            >
                Change Password
            </Link>
            <Link>My Coupons</Link>
            <Link>My Select Coupon</Link>
            <Link>Shipping Address</Link>
        </div>
    );
}

export default Nav;
