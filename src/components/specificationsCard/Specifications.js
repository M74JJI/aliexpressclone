import React from 'react';
import './specifications.css';
function Specifications({ product }) {
    return (
        <div className="specifications-container">
            <div className="specifications-left">
                {product.brand && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Brand Name:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.brand}
                        </span>
                    </div>
                )}
                {product.height && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Height:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.height}
                        </span>
                    </div>
                )}
                {product.width && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Width:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.width}
                        </span>
                    </div>
                )}
                {product.gender && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Gender:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.gender}
                        </span>
                    </div>
                )}
                {product.style && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Style:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.style}
                        </span>
                    </div>
                )}
                {product.gender && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Gender:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.gender}
                        </span>
                    </div>
                )}
                {product.modalNumber && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Modal Number:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.modalNumber}
                        </span>
                    </div>
                )}
                {product.material && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Material:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.material}
                        </span>
                    </div>
                )}
            </div>
            <div className="specifications-right">
                {product.recommendAge && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Recommended age:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.recommendAge}
                        </span>
                    </div>
                )}
                {product.use && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Usage:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.use}
                        </span>
                    </div>
                )}
                {product.origin && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Origin:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.origin}
                        </span>
                    </div>
                )}
                {product.features && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Features:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.features}
                        </span>
                    </div>
                )}
                {product.type && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Type:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.type}
                        </span>
                    </div>
                )}
                {product.compatible && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Compatible:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.compatible}
                        </span>
                    </div>
                )}
                {product.packaging && (
                    <div className="specifications-property">
                        <span className="specifications-propert-name">
                            Packaging:&nbsp;
                        </span>
                        <span className="specifications-propert-value">
                            {product.packaging}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Specifications;
