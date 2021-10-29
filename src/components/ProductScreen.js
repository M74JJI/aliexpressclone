import React, { useEffect, useState, useRef } from 'react';
import { card, Tabs } from 'antd';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';
import Product from '../pages/Product';
import { Carousel } from 'react-responsive-carousel';
import StarRating from 'react-star-ratings';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CloseCircleOutlined, LikeOutlined } from '@ant-design/icons';
import { AiFillLike, AiFillDislike, AiOutlineStar } from 'react-icons/ai';

import { RiHeartAddLine } from 'react-icons/ri';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
import '../styles/Carousel.css';
import '../styles/ReviewCard.css';
import RatingModal from './modal/RatingModal';
import { Input } from 'antd';
import '../styles/ProductScreen.css';
import { useSelector } from 'react-redux';
import { showAverage } from '../functions/rating';
import ReviewCard from './cards/ReviewCard';
import { BackTop } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
import _ from 'lodash';
import { Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Header from './nav/header/Header';
import SliderImage from 'react-zoom-slider';
import { Badge, Avatar } from 'antd';
import { addToWishlist, followStore } from '../functions/user';

import 'react-image-lightbox/style.css';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION,
} from 'react-image-magnifiers';
import { ReactImageZoomer } from 'react-image-zoomer-ch';
import RelatedCard from './cards/RelatedCard';
import Countdown from './Timer/Countdown';
import { toast } from 'react-toastify';
import {
    getProducts,
    getProductsByCategory,
    getRelated,
} from '../functions/product';
import starRatings from 'react-star-ratings/build/star-ratings';
import Specifications from './specificationsCard/Specifications';
import SocialShare from './shareSocial/SocialShare';
const { TextArea } = Input;
const { TabPane } = Tabs;
const min_Store = Math.random() > 0.5 ? 5 : 10;
const max_Store = min_Store === 5 ? 10 : 15;
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};
const { Meta } = Card;
function ProductScreen({
    product,
    onStarClick,
    handleCommentChange,
    comment,
    star,
    handleOk,
    showModal,
    handleModal,
    setShowModal,
    related,
    location,
    storeProducts,
}) {
    const locationn = useLocation();
    const history = useHistory();
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [tooltip, setTooltip] = useState('Click To add to Cart');
    const dispatch = useDispatch();
    const { cart, user } = useSelector((state) => ({ ...state }));
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    const [size, setSize] = useState('');
    const [qty, setQty] = useState(1);
    const [color, setColor] = useState('');
    const [colorClicked, setColorClicked] = useState(false);
    const [kinafCart, setKinafCart] = useState(false);
    const [topSellingByCategory, SetTopSellingByCategory] = useState([]);
    const [ship, setShip] = useState('');
    const [size_select, setSize_select] = useState(false);
    const sizeRef = useRef(null);
    let interval;
    const _id = product._id;

    useEffect(() => {
        getProductsByCategory(product.category).then((res) => {
            SetTopSellingByCategory(res.data);
        });
    }, []);
    const startTimer = () => {
        const countDownDate = new Date('September 30,2021 ').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    useEffect(() => {
        cart.map(
            (p, i) => {
                if (product.slug == p.slug && qty === p.qty) {
                    setKinafCart(true);
                } else {
                    setKinafCart(false);
                }
            },
            [product, cart, qty]
        );
    });
    /*------------------------*/
    let cartt = [];

    cartt = JSON.parse(localStorage.getItem('cart'));

    /*------------------------*/
    const discount = (
        ((Number(product.priceBefore) - Number(product.price)) * 100) /
        product.priceBefore
    ).toFixed(0);

    useEffect(() => {
        if (tempImgSrc !== '') {
            setModel(true);
        } else {
            setModel(false);
        }
    }, [model, tempImgSrc]);
    const getImg = (src) => {
        setTempImgSrc(src);
    };

    const handleAddToCart = (e) => {
        // console.log("available quantity", p.quantity);

        let cart = [];

        if (typeof window !== 'undefined') {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            cart.push({
                ...product,
                qty: qty,
                size: size,
                color: color,
            });

            let unique = _.uniqWith(cart, _.isEqual);
            localStorage.setItem('cart', JSON.stringify(unique));
            dispatch({
                type: 'ADD_TO_CART',
                payload: unique,
            });
           // setTooltip('Added');
            setQty(1);
            //show sideDrawer
            dispatch({
                type: 'SET_VISIBLE',
                payload: true,
            });
        }
        // show tooltip
    };
    const handleAddToWishlist = (e) => {
        e.preventDefault();
        addToWishlist(product._id, user.token).then((res) => {
            toast.success('added to wishlist');
            // history.push('/user/wishlist');
        });
    };

    const data = [
        {
            image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
        },
        {
            image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
        },
        {
            image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
        },
    ];
    function onChange(val) {
        if (4.95 * 1000 < val && val < 5 * 1000) {
        }
    }
    const handleQuantityChange = (e) => {
        let qty = e.target.value < 1 ? 1 : e.target.value;

        if (qty > product.quantity) {
            toast.error(`Max available quantity: ${product.quantity}`);
            return;
        }
    };
    const followStoree = () => {
        followStore(user.token, product.store._id, user._id)
            .then((res) => {
                toast.success('you are following the store');
            })
            .catch((err) => {
                console.log(err);
                toast.success('you are already following the store');
                return;
            });
    };
    /*--------------------------*/

    /*--------------------------*/
    return (
        <>
            <Header />

            <div className="ProductScreen-container">
                <div className="productScreen-product">
                    <div className="ProductCarousel">
                        {product.images && product.images.length ? (
                            <Carousel
                                showArrows={true}
                                autoPlay
                                infiniteLoop
                                className="aa"
                            >
                                {product.images &&
                                    product.images.map((i) => (
                                        <div onClick={() => setIsOpen(true)}>
                                            <img
                                                src={i.url}
                                                key={i.public_id}
                                                alt="img"
                                            />
                                        </div>
                                    ))}
                            </Carousel>
                        ) : (
                            <img
                                style={{ width: '450px', objectFit: 'cover' }}
                                src="https://www.seekpng.com/png/detail/370-3703355_empty-folder-image-showing-no-results-were-found.png"
                            />
                        )}
                    </div>
                    <div className="productScreen-infos">
                        <h5>{product.title}</h5>
                        <div className="productScreen-rating">
                            <div className="product-rating">
                                {product &&
                                product.ratings &&
                                product.ratings.length > 0 ? (
                                    <div>{showAverage(product)}</div>
                                ) : (
                                    'no rating yet'
                                )}
                            </div>
                            <div className="product-rev">
                                {product &&
                                    product.ratings &&
                                    product.ratings.length}{' '}
                                Reviews &nbsp;
                                <span>{product.sold} orders</span>
                            </div>
                        </div>
                        <div className="product-price-container">
                            <div className="product-price-slogan">
                                Enjoy special discounts!
                            </div>
                            <div className="product-price-area">
                                <div className="product-price">
                                    <span>US ${product.price}</span>
                                    <div className="product-discount">
                                        <span>US ${product.priceBefore}</span>
                                        <span>-{discount}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-newUser-bonus">
                                <img
                                    src="https://ae01.alicdn.com/kf/H01c1994a8c0746bbad4b6ef810fdd101V.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="product-coupons">
                            <div className="product-coupon-1">
                                US 1.29 Coupons For You
                            </div>
                            <div className="product-coupon-2">
                                US 2.94 off on US 1.94
                            </div>
                            <Link>Get Coupons</Link>
                        </div>
                        <div className="product-shipsFrom">
                            Ships From: {ship}
                            <div className="ships-btns">
                                <button
                                    value="  Morcco-Ksar el kebir"
                                    onClick={(e) => setShip(e.target.value)}
                                >
                                    Morcco-Ksar el kebir
                                </button>

                                <button
                                    value="Morocco-Tanger"
                                    onClick={(e) => setShip(e.target.value)}
                                >
                                    Morocco-Tanger
                                </button>
                            </div>
                        </div>
                        <div className="colorsSpans">
                            {product.colors && product.colors.length > 0
                                ? ' Colors Available :'
                                : ''}
                            {product.colors &&
                                product.colors.map((color) =>
                                    color === 'blue' ? (
                                        <button
                                            onClick={() => setColor(color)}
                                            style={{ background: '#6495ED' }}
                                        ></button>
                                    ) : color === 'white' ? (
                                        <button
                                            onClick={() => setColor(color)}
                                            style={{ background: 'white' }}
                                        ></button>
                                    ) : color === 'orange' ? (
                                        <button
                                            onClick={() => setColor(color)}
                                            style={{ background: '#FFA500' }}
                                        ></button>
                                    ) : color === 'black' ? (
                                        <button
                                            onClick={() => setColor(color)}
                                            style={{ background: 'black' }}
                                        ></button>
                                    ) : color === 'green' ? (
                                        <button
                                            onClick={() => setColor(color)}
                                            style={{ background: '#9ACD32' }}
                                        ></button>
                                    ) : color === 'silver' ? (
                                        <button
                                            onClick={() => setColor(color)}
                                            style={{ background: 'silver' }}
                                        ></button>
                                    ) : color === 'gray' ? (
                                        <span
                                            onClick={() => setColor(color)}
                                            style={{ background: 'gray' }}
                                        ></span>
                                    ) : color === 'brown' ? (
                                        <span
                                            onClick={() => setColor(color)}
                                            style={{ background: 'brown' }}
                                        ></span>
                                    ) : color === 'red' ? (
                                        <span
                                            onClick={() => setColor(color)}
                                            style={{ background: 'red' }}
                                        ></span>
                                    ) : color === 'purple' ? (
                                        <span
                                            onClick={() => setColor(color)}
                                            style={{ background: 'purple' }}
                                        ></span>
                                    ) : color === 'aqua' ? (
                                        <span
                                            onClick={() => setColor(color)}
                                            style={{ background: 'aqua' }}
                                        ></span>
                                    ) : color === 'yellow' ? (
                                        <span
                                            onClick={() => setColor(color)}
                                            style={{ background: 'yellow' }}
                                        ></span>
                                    ) : color === 'pink' ? (
                                        <span
                                            onClick={() => setColor(color)}
                                            style={{ background: 'pink' }}
                                        ></span>
                                    ) : color === 'violet' ? (
                                        <span
                                            onClick={() => setColor(color)}
                                            style={{ background: '#EE82EE' }}
                                        ></span>
                                    ) : (
                                        ''
                                    )
                                )}
                        </div>
                        <div className="color__name">
                            {color != '' && `color : ${color}`}
                        </div>
                        <div className="product-qty">
                            Quantity :
                            <button
                                disabled={qty <= 1}
                                onClick={() => setQty(qty - 1)}
                            >
                                -
                            </button>
                            <strong>{qty}</strong>
                            <Tooltip
                                title={
                                    qty >= 50
                                        ? 'You reached Maximum quantity'
                                        : ''
                                }
                            >
                                <button
                                    disabled={qty >= product.quantity}
                                    onClick={() => setQty(qty + 1)}
                                >
                                    +
                                </button>
                            </Tooltip>
                            <span className="pieces">
                                Additional 2% off (5 pieces or more) <br />
                                {product.quantity} pieces available
                            </span>
                        </div>
                        <div className="product-sizes">
                            {product.sizes &&
                                product.sizes.map((s) => (
                                    <button
                                        onClick={() => {
                                            setSize(s);
                                        }}
                                    >
                                        {s}
                                    </button>
                                ))}
                        </div>
                        {size !== '' && <>size:{size}</>}
                        <div className="productScreen-size"></div>
                        {ship == '' && (
                            <div className="select-ship">
                                Please select the country you want to ship from
                            </div>
                        )}
                        <div className="add-review">
                            <RatingModal
                                handleOk={handleOk}
                                handleModal={handleModal}
                                showModal={showModal}
                                setShowModal={setShowModal}
                            >
                                <StarRating
                                    name={product._id}
                                    numberOfStars={5}
                                    rating={star}
                                    isSelectable={true}
                                    starRatedColor="gold"
                                    changeRating={onStarClick}
                                />
                                <TextArea
                                    rows={4}
                                    id={product._id}
                                    value={comment}
                                    onChange={handleCommentChange}
                                    required
                                />
                            </RatingModal>
                        </div>

                        <div className="product-buttons">
                            {user && user.token ? (
                                <span>
                                    <button
                                        className="btnBuyNow"
                                        onClick={handleAddToWishlist}
                                    >
                                        Add to Wishlist
                                    </button>
                                </span>
                            ) : (
                                <Link
                                    style={{ border: 'none' }}
                                    className="btnBuyNow"
                                    to={{
                                        pathname: '/login',
                                        state: { from: locationn.pathname },
                                    }}
                                >
                                    Add to Wishlist
                                </Link>
                            )}

                            <span>
                                <button
                                    className="btnAddtoCart"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="productScreen-related">
                        <div className="share-social">
                            <SocialShare handleModal={handleModal} />
                        </div>
                        <div className="related-title">Recommended For You</div>

                        {related &&
                            related.slice(0, 3).map((r) => (
                                <div className="related-product" key={r._id}>
                                    <a href={`/product/${r.slug}`}>
                                        <img src={r.images[1].url} alt="" />
                                    </a>
                                    <span> US ${r.price}</span>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="store-banner">
                    <img
                        src={product.store && product.store.cover}
                        alt="Store cover"
                    />
                </div>
                <div className="productScreen-details">
                    <div className="productScreen-details-left">
                        <div className="productScreen-top-selling">
                            <div className="productScreen-seltitle">
                                Top Selling
                            </div>

                            {related &&
                                related.slice(0, 15).map((r) => (
                                    <div
                                        className="related-product"
                                        key={r._id}
                                    >
                                        <a href={`/product/${r.slug}`}>
                                            <img src={r.images[1].url} alt="" />
                                        </a>
                                        <span> US ${r.price}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="productScreen-details-right">
                        <div className="productScreen-details-top">
                            <div className="productScreen-details-top-left">
                                <Link>
                                    <h6>
                                        {product.store && product.store.name}
                                    </h6>
                                </Link>
                                <div className="toprated-badge">
                                    <svg
                                        className="icon-topseller"
                                        viewBox="0 0 1024 1024"
                                    >
                                        <path
                                            d="M341.333333 512v426.666667l170.666667-128 170.666667 128V512z"
                                            fill="#E64A33"
                                        ></path>
                                        <path
                                            d="M512 384m-277.333333 0a277.333333 277.333333 0 1 0 554.666666 0 277.333333 277.333333 0 1 0-554.666666 0Z"
                                            fill="#FAED29"
                                        ></path>
                                        <path
                                            d="M512 469.333333l-100.309333 52.736 19.157333-111.701333-81.152-79.104 112.128-16.298667L512 213.333333l50.176 101.632 112.128 16.298667-81.152 79.104 19.2 111.701333z"
                                            fill="#BB8C2C"
                                        ></path>
                                    </svg>
                                    Top Rated
                                </div>
                                <div className="feedback">
                                    <span className="feedback-number">
                                        97.5%
                                    </span>
                                    <span className="feedback-text">
                                        Positive Feedback
                                    </span>
                                </div>
                                <div className="feedback">
                                    <span className="feedback-number">433</span>
                                    <span className="feedback-text">
                                        Followers
                                    </span>
                                </div>

                                <div className="contact">
                                    <Link>
                                        <BsChatDots className="chat-icon" />
                                        Contact
                                    </Link>
                                </div>
                                <div className="seller-buttons">
                                    {user && user.token ? (
                                        <button onClick={followStoree}>
                                            Follow
                                        </button>
                                    ) : (
                                        <Link
                                            className="cart-link"
                                            to={{
                                                pathname: '/login',
                                                state: {
                                                    from: locationn.pathname,
                                                },
                                            }}
                                        >
                                            follow
                                        </Link>
                                    )}
                                    {product.store && (
                                        <a href={`/store/${product.store._id}`}>
                                            {' '}
                                            <button>Visit Store</button>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="productScreen-details-top-right">
                                {storeProducts &&
                                    storeProducts
                                        .slice(min_Store, max_Store)
                                        .map((x) => (
                                            <div className="store-screen-card">
                                                <Link to={`/product/${x.slug}`}>
                                                    <img
                                                        src={x.images[0].url}
                                                        alt=""
                                                    />
                                                </Link>

                                                <span>US ${x.price}</span>
                                            </div>
                                        ))}
                            </div>
                        </div>
                        <div className="productScreen-details-desc">
                            <div className="productScreen-details-header">
                                <Tabs type="card">
                                    <TabPane tab="OVERVIEW" key="1">
                                        {product.images &&
                                            product.imagesDesc.map((i) => (
                                                <div className="DescriptionPics">
                                                    <img
                                                        src={i.url}
                                                        key={i.public_id}
                                                        alt="img"
                                                    />
                                                </div>
                                            ))}
                                    </TabPane>{' '}
                                    <TabPane tab="REVIEWS" key="2">
                                        {product.ratings &&
                                            product.ratings.map((r, index) => (
                                                <div className="ReviewCard_Container">
                                                    <div className="ReviewCard">
                                                        <div className="review-name">
                                                            {r.postedBy.name.substring(
                                                                0,
                                                                1
                                                            )}
                                                            {'***'}{' '}
                                                            {r.postedBy.name.substring(
                                                                r.postedBy.name
                                                                    .length - 1,
                                                                r.postedBy.name
                                                                    .length
                                                            )}
                                                        </div>
                                                        <div className="ReviewCard_review">
                                                            <div>
                                                                <StarRating
                                                                    rating={
                                                                        r.star
                                                                    }
                                                                    starDimension="15px"
                                                                    starSpacing="0.8px"
                                                                    starRatedColor="#ff4848"
                                                                />
                                                                &nbsp;&nbsp;{' '}
                                                                {r.updatedAt.substring(
                                                                    0,
                                                                    10
                                                                )}
                                                                <strong>
                                                                    {' '}
                                                                    {r.updatedAt.substring(
                                                                        11,
                                                                        19
                                                                    )}
                                                                </strong>
                                                            </div>
                                                            {r.comment}{' '}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </TabPane>
                                    <TabPane tab="SPECIFICATIONS" key="3">
                                        <Specifications product={product} />
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                        <div className="full-related-products">
                            {related.map((r) => (
                                <div className="related-product full">
                                    <a href={`/product/${r.slug}`}>
                                        <img src={r.images[0].url} alt="" />
                                    </a>
                                    <span> US ${r.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={product.images[photoIndex].url}
                    nextSrc={
                        product.images[(photoIndex + 1) % product.images.length]
                            .url
                    }
                    prevSrc={
                        product.images[
                            (photoIndex + product.images.length - 1) %
                                product.images.length
                        ].url
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + product.images.length - 1) %
                                product.images.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % product.images.length)
                    }
                />
            )}
        </>
    );
}

export default ProductScreen;
