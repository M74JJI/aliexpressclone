import React from 'react';
import { Link } from 'react-router-dom';
import './twoCards.css';
function TwoCards() {
    return (
        <div className="twoCards">
            <div className="two1">
                <Link to="/category/men's-fashion">
                    <span>Men's Fashion</span>
                    <span>view more</span>
                </Link>
                <div className="two1-cards">
                    <Link
                        to="/product/ciga-design-x-series-gorilla-stainless-steel-hollow-watch-automatic-mechanical-unique-wristwatch-with-silicone-and-nylon-strap"
                        className="two1-card"
                    >
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633727011/wijrlb6v5pnieuuwihz2.jpg"
                            alt=""
                        />
                        <div className="two1-span1">
                            US $298 <span style={{ color: 'white' }}>-4%</span>
                        </div>
                    </Link>
                    <Link
                        to="/product/classic-stripe-mens-suits-vintage-male-wedding-groom-tuxedo-formal-business-blazer-2-piece-sets-terno-masculino-(jacket+pants)"
                        className="two1-card"
                    >
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1631750575/l5wexdsj6n59ajr217iu.jpg"
                            alt=""
                        />
                        <div className="two1-span1">
                            US $79.95{' '}
                            <span style={{ color: 'white' }}>-21%</span>
                        </div>
                    </Link>
                    <Link
                        to="/product/2021-fashion-men-wool-and-blends-mens-casual-business-trench-coat-mens-leisure-overcoat-male-punk-style-blends-dust-coats-jackets"
                        className="two1-card"
                    >
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633781756/gubdcinu9detceqi5u1a.jpg"
                            alt=""
                        />
                        <div className="two1-span1">
                            US $65.21{' '}
                            <span style={{ color: 'white' }}>-16%</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="two2">
                <Link to="/category/women's-fashion">
                    <span>Women's Fashion</span>
                    <span>view more</span>
                </Link>
                <div className="two1-cards">
                    <Link
                        to="/product/genuine-sheepskin-leather-jackets-women-mink-fur-collar-female-jacket-90percent-white-goose-down-women's-coats-ropa-mujer-zjt1444"
                        className="two1-card"
                    >
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633782834/fxotjwvbrffo4tmsgga5.jpg"
                            alt=""
                        />
                        <div className="two1-span1">
                            US $586.46{' '}
                            <span style={{ color: 'white' }}>-25%</span>
                        </div>
                    </Link>
                    <Link
                        to="/product/zurichouse-genuine-leather-biker-jacket-women-short-zipper-slim-leather-jacket-2021-luxury-high-quality-real-fur-lambswool-coat"
                        className="two1-card"
                    >
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633783540/frz5zzcka3nsl1xsjzeb.jpg"
                            alt=""
                        />
                        <div className="two1-span1">
                            US $365.15{' '}
                            <span style={{ color: 'white' }}>-9%</span>
                        </div>
                    </Link>
                    <Link
                        to="/product/cardigan-sweater-2021-spring-and-autumn-new-ins-popular-retro-french-loose-knitted-cardigan-length-net-red-sweater-coat-b012"
                        className="two1-card"
                    >
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633784185/eyc2ahjeucrqc3hhzsvf.jpg"
                            alt=""
                        />
                        <div className="two1-span1">
                            US $19.2{' '}
                            <span style={{ color: 'white' }}>-28%</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TwoCards;
