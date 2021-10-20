import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
function AdCard({ img }) {
    return (
        <Link
            to="/product/joylive-2426-inch-double-disc-brake-shock-absorption-bicycle-mountain-bike-adult-students-undefined-variable-speed-car-folding"
            className="AdCard"
        >
            <img src={img} alt="" />
            <span>Top Sellers</span>
        </Link>
    );
}

export default AdCard;
