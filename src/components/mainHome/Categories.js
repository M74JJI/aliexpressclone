import React from 'react';
import '../../styles/categoriesSlider.css';
function Categories() {
    return (
        <div className="categories-container">
            <div className="categoryCard-wrapper">
                <div className="category-card">
                    <img src="../../png/shoe.png" alt="" />
                </div>
                <span>Sneakers</span>
            </div>
            <div className="categoryCard-wrapper">
                <div className="category-card">
                    <img src="../../png/watch.png" alt="" />
                </div>
                <span>Watches</span>
            </div>
            <div className="categoryCard-wrapper">
                <div className="category-card">
                    <img src="../../png/jew.png" alt="" />
                </div>
                <span>Jewlery</span>
            </div>
            <div className="categoryCard-wrapper">
                <div className="category-card">
                    <img src="../../png/mac.png" alt="" />
                </div>
                <span>Computers</span>
            </div>
            <div className="categoryCard-wrapper">
                <div className="category-card">
                    <img src="../../png/ps.png" alt="" />
                </div>
                <span>Consoles</span>
            </div>
        </div>
    );
}

export default Categories;
