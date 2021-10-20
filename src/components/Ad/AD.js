import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './ad.css';
export default function AD() {
    const close = useRef(null);
    const hadnleHide = () => {
        const hid = close.current;
        hid.className = 'd-none';
    };
    return (
        <Link to="/category/electronics" className="ad" ref={close}>
            <img
                onClick={hadnleHide}
                className="close-btn"
                src="https://img.alicdn.com/tfs/TB1tH8.d3gP7K4jSZFqXXamhVXa-52-52.png"
            ></img>
            <img
                className="pop-picture"
                src="https://ae01.alicdn.com/kf/H44beac09fbc3434a9f3f9eb347344cceA/120x120.gif"
            ></img>
        </Link>
    );
}
