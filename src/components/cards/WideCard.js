import React from 'react';
import '../../styles/wideCard.css';
import { Link } from 'react-router-dom';
import { showAverage } from '../../functions/rating';
function WideCard({ product }) {
    return (
        <div className="wideCard">
            <a href={`/product/${product.slug}`}>
                <img src={product.images[0].url} alt="" />
            </a>
            <div className="wideCard-infos">
                <Link className="wideCard-title">{product.title}</Link>
                <span>{product.sold} sold</span>
                <span>
                    {product &&
                    product.ratings &&
                    product.ratings.length > 0 ? (
                        <div>{showAverage(product)}</div>
                    ) : (
                        'no rating yet'
                    )}
                </span>
            </div>{' '}
            <div className="wideCard-price">
                {product.priceBefore && (
                    <div className="wideCard-price-special">Special Price</div>
                )}
                <span className="wideCard-price-value">${product.price}</span>
                {product.priceBefore && (
                    <span className="wideCard-price-discount">
                        ${product.priceBefore}
                    </span>
                )}
            </div>
        </div>
    );
}

export default WideCard;
