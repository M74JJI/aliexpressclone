import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import NewArrivals from '../components/home/NewArrivals';
import BestSellers from '../components/home/BestSellers';
import CategoryList from '../components/category/CategoryList';
import SubList from '../components/sub/SubList';
import Carousel from '../components/mainHome/Carousel';
import '../styles/home.css';
import CategoryMenu from '../components/mainHome/CategoryMenu';
import UserMenu from '../components/mainHome/UserMenu';
import Categories from '../components/mainHome/Categories';
import FeaturedMenu from '../components/mainHome/FeaturedMenu';
import Slider from 'react-slick';
import { getProductsByCount } from '../functions/product';
import TopHeader from '../components/nav/topheader/TopHeader';
import HeadBanner from '../components/nav/headBanner/HeadBanner';
import Header from '../components/nav/header/Header';
import DealsAd from '../components/DealsAd/DealsAd';
import Welcome from '../components/WelcomeMain/Welcome';
import TopRanking from '../components/TopRanking/TopRanking';
import SuperDeals from '../components/SuperDeals/SuperDeals';
import TwoCards from '../components/twoCards/TwoCards';
import PickBlock from '../components/PickBlock/PickBlock';
import SideLine from '../components/sideLine/SideLine';
import AD from '../components/Ad/AD';
import ProductCard from '../components/cards/ProductCard';
import SHeader from '../components/Header Seller/SHeader';
import { Link } from 'react-router-dom';
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};
const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(50);
    useEffect(() => {
        getProductsByCount(50).then((res) => {
            setProducts(res.data);
        });
    });
    return (
        <div>
            <HeadBanner />
            <TopHeader />
            <Header />
            <SHeader />
            <SideLine />
            <AD />
            <div className="home-container">
                <div className="main">
                    <div className="category-main">
                        <CategoryMenu />
                    </div>
                    <div className="carousel-main">
                        <Link to="/shop" className="goToStore">
                            Go to Store
                        </Link>
                        <Carousel />
                    </div>
                    <div className="featured-main">
                        <FeaturedMenu />
                    </div>
                    <div className="user-main">
                        <UserMenu />
                    </div>
                </div>
            </div>
            <div className="home-dealsAd">
                <DealsAd />
            </div>
            <div className="topRanking-container">
                <TopRanking />
                <SuperDeals />
                <TwoCards />
                <PickBlock />
            </div>
            <div className="home__products-wrap">
                <div className="pickBlock-header">
                    <div className="blockbefore"></div>
                    <span>More to Love</span>
                    <div className="blockafter"></div>
                </div>
                <div className="home-products">
                    {products.slice(0, page).map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>
            </div>
            <div className="show-more-container">
                <button
                    onClick={() => setPage(page + 10)}
                    className={page > 50 ? 'd-none' : 'showmore-btn'}
                >
                    Show more
                </button>
            </div>
        </div>
    );
};

export default Home;
