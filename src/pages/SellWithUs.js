import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sellwithus.css';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
function SellWithUs({ history }) {
    const { user } = useSelector((state) => ({ ...state }));
    return (
        <div>
            <header className="sell-header">
                <div className="sell-logo">
                    <Link to="/">
                        <img
                            src="https://ae01.alicdn.com/kf/H1674ac74299a489f8e2995c8b73006ceJ.png"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="sell-nav">
                    <div className="sell-nav-left">
                        <ul>
                            <li>
                                <Link>Help Center</Link>
                            </li>
                            <li>
                                <Link>News</Link>
                            </li>
                            <li>
                                <Link>Advantages</Link>
                            </li>
                            <li>
                                <Link>Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sell-nav-right">
                        {user && user.token ? (
                            <Link
                                to="/sell-with-us/apply"
                                className="join-sell-btn"
                            >
                                Join AliExpress
                            </Link>
                        ) : (
                            <Link
                                className="join-sell-btn"
                                to={{
                                    pathname: '/login',
                                    state: { from: 'sell-with-us/apply' },
                                }}
                            >
                                Join AliExpress
                            </Link>
                        )}
                        {user && user.token ? (
                            user.name
                        ) : (
                            <Link to="/login" className="join-login-btn">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </header>
            <div className="video-wrapper">
                <video
                    autoPlay="autoplay"
                    id="wrapper-myvideo"
                    loop="loop"
                    muted
                >
                    <source
                        src="http://cloud.video.taobao.com/play/u/2888833696/p/1/e/6/t/1/244910446047.mp4"
                        type="video/ogg"
                    />
                    <source
                        src="http://cloud.video.taobao.com/play/u/2888833696/p/1/e/6/t/1/244910446047.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="http://cloud.video.taobao.com/play/u/2888833696/p/1/e/6/t/1/244910446047.mp4"
                        type="video/ogv"
                    />
                </video>
                <div className="banner-title-content video-info">
                    <h1 className="banner-title video-title">
                        Be a part of a new digital economy！
                    </h1>
                    <div className="box-container">
                        <Link to="/sell-with-us/apply" className="join-us">
                            Join AliExpress
                        </Link>

                        <Link className="see-full-video">
                            {' '}
                            <AiOutlinePlayCircle className="play-icon" />
                            View full video
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sell-info">
                <h4>Years Of Experience As A Global Retail Platform </h4>
                <h1>
                    AliExpress is the e-commerce retail platform of Alibaba,
                    serving buyers from all over the world.
                </h1>
            </div>
            <div className="two-lines">
                <img src="../png/sell.png" alt="" />
            </div>
            <div className="sell-info">
                <h4>Success Stories From AliExpress Sellers</h4>
                <h1>
                    Our mission is to help SMEs to succeed, and to make it easy
                    to do business anywhere.
                </h1>
            </div>
            <div className="three-images">
                <div className="three-images-container">
                    <div className="story-sell">
                        <img src="//ae01.alicdn.com/kf/HTB1sKn3LmrqK1RjSZK9q6xyypXa7.jpg" />
                        <div className="story-infos">
                            <span>Mr.Antonio</span>
                            <span>
                                The founder of Italian fashion brand CHIC & POP{' '}
                            </span>
                            <span>
                                “AliExpress has allowed us to grow our presence,
                                scaling up our successful offline fashion
                                business into the online space.”
                            </span>
                            <span className="story-img-logo1">&nbsp;</span>
                        </div>
                    </div>
                    <div className="story-sell">
                        <img src="https://ae01.alicdn.com/kf/HTB1ZqIwLQvoK1RjSZPfq6xPKFXaY.jpg" />
                        <div className="story-infos">
                            <span>Mr.Santiago</span>
                            <span>
                                General Director of Spanish 3C Brand Azorex
                            </span>
                            <span>
                                “On AliExpress we have earned new fans for our
                                brand, creating more trust and value. ”
                            </span>
                            <span className="story-img-logo2">&nbsp;</span>
                        </div>
                    </div>
                    <div className="story-sell">
                        <img src="https://ae01.alicdn.com/kf/HTB1c1EeLgHqK1RjSZJnq6zNLpXaR.jpg" />
                        <div className="story-infos">
                            <span>Erdem Inan</span>
                            <span>
                                Head of International Business in Trendyol
                            </span>
                            <span>
                                “On our first cooperation with AliExpress we
                                have reached 1800 orders in 3 days, which was a
                                very exciting beginning!”
                            </span>
                            <span className="story-img-logo3">&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className="story-banner">
                    <img
                        src="https://ae01.alicdn.com/kf/HTB1WaP7LXzqK1RjSZSgq6ApAVXaq.jpg"
                        alt=""
                    />
                    <div className="banner-title1">
                        <h3>
                            "I bought a hearing aid for my grandmother on
                            AliExpress. The doctor confirmed that the quality of
                            the aid is quite good, and the price was also quite
                            affordable. We are fully satisfied with AliExpress."{' '}
                        </h3>
                        <h5>
                            Anastasia Nalobina, 23-year-old Russian customer{' '}
                        </h5>
                    </div>
                </div>
            </div>
            <div className="sell-bottom">
                {' '}
                <div className="sell-info">
                    <h4>Enter Our Platform As An Overseas Seller</h4>
                    <h1>
                        Set up your e-commerce store in a flash, it's easy and
                        free!
                    </h1>
                </div>
                <div className="story-infos">
                    <div className="sell-bottom-container">
                        <div className="sell-infop">
                            <h4>Free Opening of Your Store </h4>
                            <p>
                                Requirements: <br />
                                1. VAT Number <br />
                                2. Company operating license <br />
                                3. ID number of company legal representative
                                Estimated process time is only 2 days.
                            </p>
                        </div>
                        <div className="sell-infop">
                            {' '}
                            <h4>Commissions Lower than the Average</h4>
                            <p>
                                The commission fee is only charged on the actual
                                store transactions, in the range of 5-8%
                                depending on items and categories.
                            </p>
                        </div>
                        <div className="sell-infop">
                            {' '}
                            <h4>Fast and Stable Payments System </h4>
                            <p>
                                Orders shipped will be paid immediately after
                                the buyer confirms the receipt (does not apply
                                in case of high-risk transactions from
                                suspicious accounts)
                            </p>
                        </div>
                    </div>
                    <div className="join-step">
                        <p>
                            Millions of shoppers are waiting to visit your store
                        </p>
                        <Link to="/sell-with-us/apply">
                            {' '}
                            <button className=" big-btn">
                                Join AliExpress
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellWithUs;
