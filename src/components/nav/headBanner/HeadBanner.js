import React from 'react';
import { Link } from 'react-router-dom';
import './headbanner.css';
function HeadBanner() {
    return (
        <div className="HeadBanner">
            <Link to="/" className="HeadBanner-link"></Link>
        </div>
    );
}

export default HeadBanner;
