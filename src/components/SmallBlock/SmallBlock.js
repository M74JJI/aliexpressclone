import React from 'react';
import { Link } from 'react-router-dom';
import './smallblock.css';
function SmallBlock({
    title,
    category,
    img1,
    img2,
    img3,
    link1,
    link2,
    link3,
}) {
    return (
        <div className="smallblock">
            <Link to={category} className="smallBlock-header">
                {title}
            </Link>
            <div className="smallBlock-cards_container">
                <Link to={link1}>
                    <img src={img1} alt="" />
                </Link>
                <Link to={link2}>
                    <img src={img2} alt="" />
                </Link>
                <Link to={link3}>
                    <img src={img3} alt="" />
                </Link>
            </div>
        </div>
    );
}

export default SmallBlock;
