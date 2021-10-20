import React from 'react';
import './sideline.css';
import { Link } from 'react-router-dom';
import SocialShare from '../shareSocial/SocialShare';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';
function SideLine() {
    return (
        <div className="sideline">
            <div className="sidelineMiddle">
                <Link to="/user/orders" className="sideline-gift">
                    <span className="sidePoppup">New User Zone</span>
                    <div className="arrow-right"></div>
                </Link>

                <Link className="sideline-img" style={{ position: 'relative' }}>
                    <img src="../../../icons/couponn.png" alt="" />
                    <span className="sidePoppup1">Coupons</span>
                    <div className="arrow-right1"></div>
                </Link>
                <Link
                    to="/user/wishlist"
                    className="sideline-img"
                    style={{ position: 'relative' }}
                >
                    <img src="../../../icons/wishlist.png" alt="" />
                    <span className="sidePoppup1">Wish List</span>
                    <div className="arrow-right1"></div>
                </Link>
                <Link
                    to="/user/orders"
                    className="sideline-img"
                    style={{ position: 'relative' }}
                >
                    <img src="../../../icons/icViewed.png" alt="" />
                    <span className="sidePoppup1">History &nbsp;</span>
                    <div className="arrow-right1"></div>
                </Link>
            </div>
            <div className="sideLineBottom">
                <Link className="sideline-img" style={{ position: 'relative' }}>
                    <img src="../../../icons/share.png" alt="" />
                    <div className="sidePoppupSocial">
                        <FacebookShareButton url={window.location.href}>
                            <FacebookIcon size={32} />
                        </FacebookShareButton>
                        <br />
                        <TwitterShareButton url={window.location.href}>
                            <TwitterIcon size={32} />
                        </TwitterShareButton>{' '}
                        <br />
                        <RedditShareButton url={window.location.href}>
                            <RedditIcon size={32} />
                        </RedditShareButton>{' '}
                        <br />
                        <VKShareButton url={window.location.href}>
                            <VKIcon size={32} />
                        </VKShareButton>{' '}
                        <br />
                        <WhatsappShareButton url={window.location.href}>
                            <WhatsappIcon size={32} />
                        </WhatsappShareButton>{' '}
                        <br />
                        <PinterestShareButton url={window.location.href}>
                            <PinterestIcon size={32} />
                        </PinterestShareButton>{' '}
                        <br />
                        <EmailShareButton url={window.location.href}>
                            <EmailIcon size={32} />
                        </EmailShareButton>
                    </div>
                    <div className="arrow-right2"></div>
                </Link>
                <Link className="sideline-img" style={{ position: 'relative' }}>
                    <img
                        src="../../../icons/feedback.png"
                        stye={{ width: '20px' }}
                    />
                    <span className="sidePoppup1">Feddback</span>
                    <div className="arrow-right1"></div>
                </Link>
            </div>
        </div>
    );
}

export default SideLine;
