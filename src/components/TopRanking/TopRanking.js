import React from 'react';
import { Link } from 'react-router-dom';
import './tranking.css';
function TopRanking() {
    return (
        <div className="top-ranking">
            <Link>
                <span>Top Rankings</span>
                <span>view more</span>
            </Link>

            <div className="top-ranking-cards">
                <Link
                    to="/product/2020-best-sale-gaming-desk-table-lega-80x50x75cm-cool-black-legz-80x60x75cm-computer-desktop-home-supplies-office-desk-chair-hot"
                    className="ranking-card"
                >
                    <img
                        src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633777333/ewljcdjip3vt23yu99ch.jpg"
                        alt=""
                    />
                    <span className="ranking-span">US $47.24</span>
                </Link>
                <Link
                    to="/product/jinlery-tourbillon-watch-large-square-dial-men's-mechanical-watch-skeleton-watch-for-men-2021-new-rubber-religio-masculino"
                    className="ranking-card"
                >
                    <img
                        src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633724832/wbghrdatvacmtkqqoc2z.jpg"
                        alt=""
                    />{' '}
                    <span className="ranking-span">US $1332.19</span>
                </Link>
                <Link
                    to="/product/2021-new-arrivel-long-coat-designs-chinese-red-men-suit-gentle-mens-tuxedo-prom-blazer-custom-3-pieces-(jacket+vest+pants)"
                    className="ranking-card"
                >
                    <img
                        src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633719383/pi7wcrerd0frw5hwy1wl.jpg"
                        alt=""
                    />{' '}
                    <span className="ranking-span">US $51.99</span>
                </Link>
                <Link
                    to="/product/earphones-wireless-headphones-touch-control-sports-earbuds-microphone-works-on-all-smartphones-music-bluetooth-headset-y50-tws"
                    className="ranking-card"
                >
                    <img
                        src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633707049/fvdfwak5rblsukoqjqk2.jpg"
                        alt=""
                    />{' '}
                    <span className="ranking-span">US $23</span>
                </Link>
                <Link
                    to="/product/seemfly-reading-glasses-men-anti-blue-rays-presbyopia-goggles-women-vintage-rimless-eyewear-diopter-+1.0-1.5-2.0-2.5-3.0-3.5-4.0"
                    className="ranking-card"
                >
                    <img
                        src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633774389/x4jjoa5hhkupldxjlv5h.jpg"
                        alt=""
                    />{' '}
                    <span className="ranking-span">US $2.32</span>
                </Link>
                <Link
                    to="/product/twotwinstyle-patchwork-sequined-jacket-for-owmen-turtleneck-long-sleeve-casual-lace-up-jackets-female-2020-fall-fashion-new-tide"
                    className="ranking-card"
                >
                    <img
                        src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633780204/ytdu1ojk0pgvbevuf56t.jpg"
                        alt=""
                    />{' '}
                    <span className="ranking-span">US $38.95</span>
                </Link>
            </div>
        </div>
    );
}

export default TopRanking;
