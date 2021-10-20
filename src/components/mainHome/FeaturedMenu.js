import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/featured.css';
import PureSlider from '../pureSlider/PureSlider';

function FeaturedMenu({ product }) {
    const [next, setNext] = useState(1);
    return (
        <div className="featured">
            <div className="featured-container">
                <Link>
                    <div className="featured-coupon">
                        <div className="featured-coupon__welcome">
                            <h3>Welcome newcomers!</h3>
                            <p>US $0.01 hot picks &amp; coupons</p>
                        </div>
                        <Link>
                            <div className="featured-coupon__coupon">
                                <h3> use 'MHAJJI'</h3>
                                <p>for 87% off</p>
                            </div>
                        </Link>
                    </div>
                </Link>
                <div className="featured-swiper-wrap">
                    <button
                        disabled={next <= 1}
                        onClick={() => setNext(next - 1)}
                        style={{ cursor: next === 1 && 'not-allowed' }}
                    >
                        {' '}
                        &lt;
                    </button>
                    <div
                        className={
                            next === 1
                                ? 'featured-page1 before'
                                : 'featured-page1 '
                        }
                        style={{ transform: next === 2 && 'translateX(150%)' }}
                    >
                        <Link
                            to="/product/original-apple-iphone-12-pro-max-5g-lte-mobile-6.7''-6gband128256512gb-ios-a14-bionic-hexa-core-triple-12mp-face-id-cellphone"
                            className="featured-prod"
                        >
                            <img
                                src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633802228/sjjwl1um5quzxwpd931z.jpg"
                                alt=""
                            />
                            <span>US $1406.2</span>
                            <span>US $1600</span>
                        </Link>
                        <Link
                            to="/product/round-six-square-circle-triangle-plastic-helmet-adults-halloween-party-cos-suits-gifts-squid-game-costumes-mask-cosplay-jumpsuit"
                            className="featured-prod"
                        >
                            <img
                                src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633798004/inrjn9pcizecgwjkdiy6.jpg"
                                alt=""
                            />
                            <span>US $46.32</span>
                            <span>US $86.3</span>
                        </Link>
                        <Link
                            to="/product/rhinestone-crystal-choker-necklace-women-punk-gothic-chokers-collier-jeweley-party-prom-silver-diamond-chain-bridal-wedding"
                            className="featured-prod"
                        >
                            <img
                                src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633797171/igl1jns32h4i7vi2yrul.jpg"
                                alt=""
                            />
                            <span>US $6.45</span>
                            <span>US $11.52</span>
                        </Link>
                        <Link
                            to="/product/sneakers-men-mesh-breathable-running-sport-shoes-unisex-light-soft-thick-sole-hole-couple-shoes-athletic-sneakers-women-shoes"
                            className="featured-prod"
                        >
                            <img
                                src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633791568/r7vm0goe1dbflznep0ww.jpg"
                                alt=""
                            />
                            <span>US $10.71</span>
                            <span>US $15.21</span>
                        </Link>
                    </div>
                    <div
                        className={
                            next === 2
                                ? 'featured-page2 next'
                                : 'featured-page2'
                        }
                    >
                        <Link
                            to="/product/one-handed-keyboard-set-colorful-macro-recording-rgb-game-console-game-keyboard-converter-eating-chicken"
                            className="featured-prod"
                        >
                            <img
                                src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633786886/bmmbxqxl0hl1z7vgergj.jpg"
                                alt=""
                            />
                            <span>US $8.7</span>
                            <span>US $11.23</span>
                        </Link>
                        <Link
                            to="/product/crocodile-brand-plus-size-vest-mens-jacket-sleeveless-vests-jackets-men-casual-coats-mens-vest-man-cotton-thicken-waistcoat-8xl"
                            className="featured-prod"
                        >
                            <img
                                src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633781059/z5spectbnrgbilsbqiw9.jpg"
                                alt=""
                            />
                            <span>US $19.11</span>
                            <span>US $23.5</span>
                        </Link>
                        <Link
                            to="/product/new-fashion-small-square-vintage-cycling-sunglasses-women-2021-cycling-equipment-polarized-sun-glasses-rectangle-eyewear-uv400"
                            className="featured-prod"
                        >
                            <img
                                src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633776084/fqhesmga62fccvfeiesx.jpg"
                                alt=""
                            />
                            <span>US $7.86</span>
                            <span>US $12.55</span>
                        </Link>
                        <Link
                            to="/product/mtb-bike-helmet-bicycle-men-women-outdoor-sports-style-ultralight-aero-safely-cap-capacete-ciclismo-mountain-road-cycling-helmet"
                            className="featured-prod"
                        >
                            <img
                                src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633720323/dernmfqfcknu761d1hdh.jpg"
                                alt=""
                            />
                            <span>US $59</span>
                            <span>US $87</span>
                        </Link>
                    </div>
                    <button
                        disabled={next >= 2}
                        onClick={() => setNext(next + 1)}
                        style={{ cursor: next === 2 && 'not-allowed' }}
                    >
                        {' '}
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedMenu;
