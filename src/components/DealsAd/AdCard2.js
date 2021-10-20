import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
function AdCard2({ img }) {
    return (
        <Link
            to="/product/joylive-wcg-gaming-chair-pvc-household-armchair-ergonomic-computer-office-chairs-lift-and-swivel-function-adjustable-footrest"
            className="AdCard2"
        >
            <img src={img} alt="" />
            <span>Top Brands</span>
        </Link>
    );
}

export default AdCard2;
