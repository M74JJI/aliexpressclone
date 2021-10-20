import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import laptop from '../../images/laptop.png';
import { Link } from 'react-router-dom';
import { showAverage } from '../../functions/rating';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/productCard.css';
const { Meta } = Card;

const ProductCard = ({ product }) => {
    const [tooltip, setTooltip] = useState('Click to add');

    // redux
    const { user, cart } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // create cart array
        let cart = [];
        if (typeof window !== 'undefined') {
            // if cart is in local storage GET it
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            // push new product to cart
            cart.push({
                ...product,
                count: 1,
            });
            // remove duplicates
            let unique = _.uniqWith(cart, _.isEqual);
            // save to local storage
            // console.log('unique', unique)
            localStorage.setItem('cart', JSON.stringify(unique));
            // show tooltip
            setTooltip('Added');

            // add to reeux state
            dispatch({
                type: 'ADD_TO_CART',
                payload: unique,
            });
            // show cart items in side drawer
            dispatch({
                type: 'SET_VISIBLE',
                payload: true,
            });
        }
    };

    // destructure
    const { images, title, description, slug, price } = product;
    return (
        <div className="product">
            <a href={`/product/${slug}`}>
                <img src={product.images[0].url} alt="" />
            </a>
            <div className="product-infos">
                <a href={`/product/${slug}`}>
                    <span className="product-title">{product.title}</span>
                </a>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                    {product &&
                    product.ratings &&
                    product.ratings.length > 0 ? (
                        <div>{showAverage(product)}</div>
                    ) : (
                        'no rating yet'
                    )}
                </div>
                <div className="product-sold">{product.sold} sold</div>
                <div className="product-shipping">Free Shipping</div>
            </div>
        </div>
    );
};

export default ProductCard;
{
    /* 
 {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div classNameName="text-center pt-1 pb-3">No rating yet</div>
      )}

      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            classNameName="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined classNameName="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined classNameName="text-danger" /> <br />
              {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
            </a>
          </Tooltip>,
        ]}
      >
        <Meta
          title={`${title} - $${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
*/
}
