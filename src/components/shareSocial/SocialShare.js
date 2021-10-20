import React, { useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from 'react-share';
import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
} from 'react-share';
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
} from 'react-share';
import { Link } from 'react-router-dom';
import './socialshare.css';
function SocialShare({ location, handleModal }) {
    const [opened, setOpened] = useState(true);
    return (
        <div className="socialshare">
            <div
                className={
                    opened ? 'social-links' : 'social-links social-toggle '
                }
            >
                <FacebookShareButton url={window.location.href}>
                    <FacebookIcon size={32} />
                </FacebookShareButton>

                <TwitterShareButton url={window.location.href}>
                    <TwitterIcon size={32} />
                </TwitterShareButton>
                <RedditShareButton url={window.location.href}>
                    <RedditIcon size={32} />
                </RedditShareButton>
                <VKShareButton url={window.location.href}>
                    <VKIcon size={32} />
                </VKShareButton>
                <WhatsappShareButton url={window.location.href}>
                    <WhatsappIcon size={32} />
                </WhatsappShareButton>
                <PinterestShareButton url={window.location.href}>
                    <PinterestIcon size={32} />
                </PinterestShareButton>
                <EmailShareButton url={window.location.href}>
                    <EmailIcon size={32} />
                </EmailShareButton>
                <span className="add-review1" onClick={handleModal}>
                    <BsPencil />
                </span>
            </div>
            {opened ? (
                <span
                    className="close-social"
                    onClick={() => setOpened(false)}
                ></span>
            ) : (
                <span
                    className="open-social"
                    onClick={() => setOpened(true)}
                ></span>
            )}
        </div>
    );
}

export default SocialShare;
