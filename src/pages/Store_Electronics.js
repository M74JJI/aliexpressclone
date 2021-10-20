import React, { useEffect, useState } from 'react';
import Header from '../components/nav/header/Header';
import TopHeader from '../components/nav/topheader/TopHeader';
import { getStore } from '../functions/store';
import { BiSearch } from 'react-icons/bi';
import {
    addToWishlist,
    followStore,
    isFollowing,
    unfollowStore,
} from '../functions/user';
import { Link } from 'react-router-dom';
import '../styles/store.css';
import { BsArrowDown } from 'react-icons/bs';
import { ImHeart } from 'react-icons/im';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector } from 'react-redux';
import { getStoreProducts } from '../functions/product';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { showAverage } from '../functions/ratingYellow';
import { currentUser } from '../functions/auth';
function Store_Electronics({ match }) {
    const [store, setStore] = useState({});
    const [followers, setFollowers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [products, setProducts] = useState([]);
    const [productsPrice, setProductsPrice] = useState(false);
    const [productsSold, setProductsSold] = useState(false);
    const [productsLatest, setProductsLatest] = useState(false);
    const [bestMatch, setBestMatch] = useState(true);
    const [priceSelected, setPriceSelected] = useState(true);
    const [wideView, setWideView] = useState(false);

    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [alreadyFollowing, setAlreadyFollowing] = useState(false);
    const { user } = useSelector((state) => ({ ...state }));
    const min = Math.floor((Math.random() * products.length) / 4 + 1);
    const max = Math.floor(Math.random() * products.length + 1);

    const reset = () => {
        setProductsSold(false);
        setProductsLatest(false);
        setProductsPrice(false);
        setBestMatch(true);
    };

    const handleSort1 = () => {
        setProductsSold(true);
        setProductsLatest(false);
        setProductsPrice(false);
        setBestMatch(false);
    };
    const handleSort2 = () => {
        setProductsSold(false);
        setProductsLatest(true);
        setProductsPrice(false);
        setBestMatch(false);
    };
    const handleSort3 = () => {
        setProductsSold(false);
        setProductsLatest(false);
        setProductsPrice(true);
        setBestMatch(false);
        setPriceSelected(!priceSelected);
    };

    const handleActive1 = () => {
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
    };
    const handleActive2 = () => {
        setActive2(true);
        setActive1(false);
        setActive3(false);
        setActive4(false);
        reset();
    };
    const handleActive3 = () => {
        setActive3(true);
        setActive2(false);
        setActive1(false);
        setActive4(false);
        setProductsSold(true);
    };
    const handleActive4 = () => {
        setActive4(true);
        setActive2(false);
        setActive3(false);
        setActive1(false);
    };
    const id = '6162323df766c19682d5df8d';

    useEffect(() => {
        getStore(id)
            .then((res) => {
                setStore(res.data);
                setFollowers(res.data.followers);
                isFollowing();
                if (productsLatest) {
                    getStoreProducts('createdAt', 'desc', id).then((res) => {
                        setProducts(res.data);
                    });
                }
                if (productsPrice) {
                    if (priceSelected) {
                        getStoreProducts('price', 'asc', id).then((res) => {
                            setProducts(res.data);
                        });
                    } else {
                        getStoreProducts('price', 'desc', id).then((res) => {
                            setProducts(res.data);
                        });
                    }
                }
                if (productsSold) {
                    getStoreProducts('sold', 'desc', id).then((res) => {
                        setProducts(res.data);
                    });
                } else {
                    setProducts(res.data.products);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [
        productsLatest,
        productsPrice,
        productsSold,
        priceSelected,
        bestMatch,
        active1,
        alreadyFollowing,
    ]);

    const isFollowing = () => {
        if (user && user.token) {
            followers.map((u) => {
                if (u.name === 'm74jji') {
                    setAlreadyFollowing(true);
                }
            });
        }
    };
    const followStoree = () => {
        followStore(user.token, id, user._id)
            .then((res) => {
                toast.success('you are following the store');
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                toast.success('you are already following the store');
            });
    };
    const unfollowStoree = () => {
        unfollowStore(user.token, id, user._id)
            .then((res) => {
                toast.success('you unfollowed the store');
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleAddToWishlist = (p, e) => {
        e.preventDefault();
        addToWishlist(p._id, user.token).then((res) => {
            console.log('ADDED TO WISHLIST', res.data);
            toast.success('added to wishlist');
            // history.push('/user/wishlist');
        });
    };

    const followersModal = () => (
        <div className="followers-modal">
            {followers && followers.map((f) => <span>{f.name}</span>)}
        </div>
    );
    return (
        <>
            <TopHeader />
            <Header />

            <div className="store-top">
                <div className="store-top-container">
                    <span className="store-top-name">{store.name}</span>
                    <div className="store-years">
                        Open since
                        <span>
                            {store.createdAt &&
                                store.createdAt.substring(0, 10)}
                        </span>
                    </div>
                    <div className="store-rated">
                        <img
                            src="https://ae01.alicdn.com/kf/HTB1.tK0ieuSBuNjSszi762q8pXak.png"
                            alt=""
                        />
                        <span>{store.classement}</span>
                    </div>
                    <span className="store-rate">{store.rate}%</span>
                    <div className="store-followers">
                        {user && user.token && alreadyFollowing == false ? (
                            <button onClick={followStoree}>FOLLOW</button>
                        ) : user && user.token && alreadyFollowing == true ? (
                            <button onClick={unfollowStoree}>UNFOLLOW</button>
                        ) : (
                            <button>
                                <Link
                                    style={{ color: 'black' }}
                                    to={{
                                        pathname: '/login',
                                        state: { from: `/store/${id}` },
                                    }}
                                >
                                    Follow
                                </Link>
                            </button>
                        )}
                        <span>
                            {store.followers && store.followers.length}{' '}
                            followers
                        </span>
                    </div>
                </div>
                <div className="store-name">
                    <img src={store.cover} alt="" />
                    <h1>{store.name}</h1>
                </div>
                <div className="store-header">
                    <div className="store-header-container">
                        <Link
                            className={active1 && 'store-menu-active'}
                            onClick={handleActive1}
                        >
                            Home
                        </Link>
                        <Link
                            className={active2 && 'store-menu-active'}
                            onClick={handleActive2}
                        >
                            Products
                        </Link>
                        <Link>Sale Items</Link>
                        <Link
                            className={active3 && 'store-menu-active'}
                            onClick={handleActive3}
                        >
                            Top Selling
                        </Link>
                        <Link
                            className={active4 && 'store-menu-active'}
                            onClick={handleActive4}
                        >
                            Feedback
                        </Link>
                    </div>
                </div>
                {active1 && (
                    <div className="store-home">
                        <Carousel
                            className="store-carousel"
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showIndicators={false}
                            showThumbs={false}
                            interval={3000}
                        >
                            <div>
                                <img
                                    loading="lazy"
                                    src="https://ae04.alicdn.com/kf/H36e14504edd9423388e613d28e703c43G.jpg"
                                    alt=""
                                ></img>
                            </div>
                            <div>
                                <img
                                    loading="lazy"
                                    src="https://images.squarespace-cdn.com/content/v1/53451c8ce4b0918d393d40d1/1531996744681-EUJGYH2MPHM3MUCC8TBP/Macbook+pro+flatlay"
                                    alt=""
                                ></img>
                            </div>
                            <div>
                                <img
                                    loading="lazy"
                                    src="https://ae01.alicdn.com/kf/Hb10f8cfc545246b2a58f3e5b807f5829n.jpg"
                                    alt=""
                                ></img>
                            </div>
                        </Carousel>
                        {store.banner &&
                            store.banner.map((b) => <img src={b.url} alt="" />)}
                        <div className="store-products-home">
                            {products.map((p) => (
                                <Link
                                    to={`/product/${p.slug}`}
                                    className="store-product-card"
                                >
                                    <img src={p.images[0].url} alt="" />
                                    <Link
                                        to={`/product/${p.slug}`}
                                        className="store-card-title"
                                    >
                                        {p.title.substring(0, 83)}
                                    </Link>
                                    <div className="store-card-btm">
                                        <span>US {p.price}</span>
                                        <span>{p.sold} sold</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                {active2 && (
                    <div className="store-products-containerr">
                        <div className="store-products-leftMenu">
                            <div className="store-leftMenu-first">
                                <h3>Recommend</h3>
                                {products.slice(0, 2).map((p) => (
                                    <div className="store-small-card">
                                        <Link>
                                            <img src={p.images[1].url} alt="" />
                                        </Link>
                                        <div className="store-small-card-infos">
                                            <Link>
                                                {p.title.substring(0, 32)}...
                                            </Link>
                                            <b>US ${p.price}</b>
                                            <span>Orders[{p.sold}]</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="store-products-right">
                            <div className="store-products-search">
                                <b>Store Search {'>'} </b>
                                <div className="products-search-input">
                                    <input
                                        type="text"
                                        placeholder="Search within results."
                                        value={searchTerm}
                                        className="search-input-place"
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                    />
                                    <BiSearch className="search-store-icon" />
                                </div>
                            </div>
                            <div className="products-sort-header">
                                <div className="products-sort-left">
                                    <span
                                        className={bestMatch && 'sort-active'}
                                        onClick={reset}
                                    >
                                        Best Match
                                    </span>
                                    <span
                                        className={
                                            productsSold && 'sort-active'
                                        }
                                        onClick={handleSort1}
                                    >
                                        Orders
                                        <BsArrowDown />
                                    </span>
                                    <span
                                        className={
                                            productsLatest && 'sort-active'
                                        }
                                        onClick={handleSort2}
                                    >
                                        New
                                        <BsArrowDown />
                                    </span>
                                    <span
                                        className={
                                            productsPrice && 'sort-active'
                                        }
                                        onClick={handleSort3}
                                    >
                                        Price
                                        <RiArrowUpDownFill />
                                    </span>
                                </div>
                                <div className="products-sort-right">
                                    view{' '}
                                    <HiOutlineViewGrid
                                        className={
                                            wideView
                                                ? 'store-ic'
                                                : 'store-ic wide-view'
                                        }
                                        onClick={() => setWideView(false)}
                                    />{' '}
                                    <GiHamburgerMenu
                                        className={
                                            wideView
                                                ? 'store-ic wide-view'
                                                : 'store-ic '
                                        }
                                        onClick={() => setWideView(true)}
                                    />
                                </div>
                            </div>
                            <div
                                className={
                                    wideView
                                        ? 'store-products flex-col'
                                        : 'store-products'
                                }
                            >
                                {products
                                    .filter((val) => {
                                        if (searchTerm == '') {
                                            return val;
                                        } else if (
                                            val.title
                                                .toLowerCase()
                                                .includes(
                                                    searchTerm.toLocaleLowerCase()
                                                )
                                        ) {
                                            return val;
                                        }
                                    })
                                    .map((p) =>
                                        wideView ? (
                                            <div className="store-product-widecard1">
                                                <a
                                                    href={`/product/${p.slug}`}
                                                    className="store-product-widecard1-img"
                                                >
                                                    <img
                                                        src={p.images[0].url}
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href={`/product/${p.slug}`}
                                                    className="widecard1-title"
                                                >
                                                    {p.title}
                                                </a>
                                                <div className="wideCard1-right">
                                                    <div>
                                                        <b>US {p.price} </b>
                                                        /piece
                                                    </div>
                                                    {p.ratings &&
                                                    p.ratings.length
                                                        ? showAverage(p)
                                                        : ` Orders(${p.sold})`}
                                                    <div
                                                        className="wideCard1-wishlist"
                                                        onClick={(e) =>
                                                            handleAddToWishlist(
                                                                p,
                                                                e
                                                            )
                                                        }
                                                    >
                                                        <ImHeart className="wideCard1-ic" />{' '}
                                                        Add to wish list
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="store-product-card1">
                                                <div className="sold-img">
                                                    <span>25</span>
                                                    <div className="off">
                                                        <span>%</span>
                                                        <span>OFF</span>
                                                    </div>
                                                </div>
                                                <div className="motalat"></div>
                                                <div className="product-card1-img">
                                                    <Link
                                                        to={`/product/${p.slug}`}
                                                    >
                                                        <img
                                                            src={
                                                                p.images[0].url
                                                            }
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>

                                                <div className="store-product-card1-infos">
                                                    <Link
                                                        to={`/product/${p.slug}`}
                                                        className="store-product-card1-title"
                                                    >
                                                        {p.title.substring(
                                                            0,
                                                            50
                                                        )}
                                                    </Link>
                                                    <b className="store-product-card1-price">
                                                        US {p.price}
                                                    </b>
                                                    <del
                                                        className="store-product-card1-priceBefore"
                                                        style={{
                                                            fontStyle: 'italic',
                                                        }}
                                                    >
                                                        ${p.priceBefore}
                                                    </del>
                                                    <span className="store-product-card1-sold">
                                                        {p.sold} sold
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    )}
                            </div>
                        </div>
                    </div>
                )}
                {active3 && (
                    <div className="store-home">
                        <div className="store-products-containerr">
                            <div className="store-products-leftMenu">
                                <div className="store-leftMenu-first">
                                    <h3>Recommend</h3>
                                    {products.slice(0, 2).map((p) => (
                                        <div className="store-small-card">
                                            <Link>
                                                <img
                                                    src={p.images[1].url}
                                                    alt=""
                                                />
                                            </Link>
                                            <div className="store-small-card-infos">
                                                <Link>
                                                    {p.title.substring(0, 32)}
                                                    ...
                                                </Link>
                                                <b>US ${p.price}</b>
                                                <span>Orders[{p.sold}]</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="store-products-right">
                                <div className="store-products-search">
                                    <b>Store Search {'>'} </b>
                                    <div className="products-search-input">
                                        <input
                                            type="text"
                                            placeholder="Search within results."
                                            value={searchTerm}
                                            className="search-input-place"
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                        />
                                        <BiSearch className="search-store-icon" />
                                    </div>
                                </div>
                                <div className="products-sort-header">
                                    <div className="products-sort-left">
                                        <span
                                            className={
                                                bestMatch && 'sort-active'
                                            }
                                            onClick={reset}
                                        >
                                            Best Match
                                        </span>
                                        <span
                                            className={
                                                productsSold && 'sort-active'
                                            }
                                            onClick={handleSort1}
                                        >
                                            Orders
                                            <BsArrowDown />
                                        </span>
                                        <span
                                            className={
                                                productsLatest && 'sort-active'
                                            }
                                            onClick={handleSort2}
                                        >
                                            New
                                            <BsArrowDown />
                                        </span>
                                        <span
                                            className={
                                                productsPrice && 'sort-active'
                                            }
                                            onClick={handleSort3}
                                        >
                                            Price
                                            <RiArrowUpDownFill />
                                        </span>
                                    </div>
                                    <div className="products-sort-right">
                                        view{' '}
                                        <HiOutlineViewGrid
                                            className={
                                                wideView
                                                    ? 'store-ic'
                                                    : 'store-ic wide-view'
                                            }
                                            onClick={() => setWideView(false)}
                                        />{' '}
                                        <GiHamburgerMenu
                                            className={
                                                wideView
                                                    ? 'store-ic wide-view'
                                                    : 'store-ic '
                                            }
                                            onClick={() => setWideView(true)}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={
                                        wideView
                                            ? 'store-products flex-col'
                                            : 'store-products'
                                    }
                                >
                                    {products
                                        .filter((val) => {
                                            if (searchTerm == '') {
                                                return val;
                                            } else if (
                                                val.title
                                                    .toLowerCase()
                                                    .includes(
                                                        searchTerm.toLocaleLowerCase()
                                                    )
                                            ) {
                                                return val;
                                            }
                                        })
                                        .map((p) =>
                                            wideView ? (
                                                <div className="store-product-widecard1">
                                                    <a
                                                        href={`/product/${p.slug}`}
                                                        className="store-product-widecard1-img"
                                                    >
                                                        <img
                                                            src={
                                                                p.images[0].url
                                                            }
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a
                                                        href={`/product/${p.slug}`}
                                                        className="widecard1-title"
                                                    >
                                                        {p.title}
                                                    </a>
                                                    <div className="wideCard1-right">
                                                        <div>
                                                            <b>US {p.price} </b>
                                                            /piece
                                                        </div>
                                                        {p.ratings &&
                                                        p.ratings.length
                                                            ? showAverage(p)
                                                            : ` Orders(${p.sold})`}
                                                        <div
                                                            className="wideCard1-wishlist"
                                                            onClick={(e) =>
                                                                handleAddToWishlist(
                                                                    p,
                                                                    e
                                                                )
                                                            }
                                                        >
                                                            <ImHeart className="wideCard1-ic" />{' '}
                                                            Add to wish list
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="store-product-card1">
                                                    <div className="sold-img">
                                                        <span>25</span>
                                                        <div className="off">
                                                            <span>%</span>
                                                            <span>OFF</span>
                                                        </div>
                                                    </div>
                                                    <div className="motalat"></div>
                                                    <div className="product-card1-img">
                                                        <Link
                                                            to={`/product/${p.slug}`}
                                                        >
                                                            <img
                                                                src={
                                                                    p.images[0]
                                                                        .url
                                                                }
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>

                                                    <div className="store-product-card1-infos">
                                                        <Link
                                                            to={`/product/${p.slug}`}
                                                            className="store-product-card1-title"
                                                        >
                                                            {p.title.substring(
                                                                0,
                                                                50
                                                            )}
                                                        </Link>
                                                        <b className="store-product-card1-price">
                                                            US {p.price}
                                                        </b>
                                                        <del
                                                            className="store-product-card1-priceBefore"
                                                            style={{
                                                                fontStyle:
                                                                    'italic',
                                                            }}
                                                        >
                                                            ${p.priceBefore}
                                                        </del>
                                                        <span className="store-product-card1-sold">
                                                            {p.sold} sold
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {active4 && (
                    <div className="store-home">
                        <div className="store-products-containerr">
                            <div className="store-products-leftMenu">
                                <div className="store-leftMenu-first">
                                    <h3>Recommend</h3>
                                    {products.slice(0, 2).map((p) => (
                                        <div className="store-small-card">
                                            <Link>
                                                <img
                                                    src={p.images[1].url}
                                                    alt=""
                                                />
                                            </Link>
                                            <div className="store-small-card-infos">
                                                <Link>
                                                    {p.title.substring(0, 32)}
                                                    ...
                                                </Link>
                                                <b>US ${p.price}</b>
                                                <span>Orders[{p.sold}]</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="store-products-right">
                                <h6>Seller Feedback</h6>
                                <div className="seller-summary">
                                    <div class="new-top">
                                        <h3>Seller Summary </h3>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th width="230">Seller: </th>
                                                <td>
                                                    <a
                                                        href={`/store/${store._id}`}
                                                        target="_top"
                                                    >
                                                        {store.name}
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>
                                                    Positive Feedback (Past 6
                                                    months):
                                                </th>
                                                <td>
                                                    <span>{store.rate}%</span>
                                                    <img
                                                        style={{
                                                            marginBottom: '3px',
                                                        }}
                                                        class="imageHelp"
                                                        src="//ae01.alicdn.com/images/eng/escrow/icon/ico_help.gif"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    AliExpress Seller Since:{' '}
                                                </th>
                                                <td>
                                                    {store.createdAt &&
                                                        store.createdAt.substring(
                                                            0,
                                                            10
                                                        )}{' '}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="store-ratings">
                                    <ul>
                                        <li>
                                            <a href="">
                                                Feedback Received as a
                                                Seller(9556)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="store-ratings-pagination">
                                    <div className="pagination-left">
                                        Viewing 1 - 10
                                    </div>
                                    <div className="pagination-right">
                                        <span>
                                            <IoMdArrowDropleft
                                                style={{
                                                    fontSize: '1rem',
                                                    transform:
                                                        'translateY(4px)',
                                                }}
                                            />
                                            Previous
                                        </span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>...</span>
                                        <span>
                                            Next{' '}
                                            <IoMdArrowDropright
                                                style={{
                                                    fontSize: '1rem',
                                                    transform:
                                                        'translateY(4px)',
                                                }}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="store-ratings-container">
                                    <thead
                                        style={{
                                            backgroundColor: '#e4e7f0',
                                            height: '20px',
                                        }}
                                    >
                                        <tr>
                                            <th
                                                className="th3"
                                                style={{ width: '14%' }}
                                            >
                                                {' '}
                                                Buyer
                                            </th>
                                            <th
                                                className="th2 th2-store"
                                                style={{ width: '34%' }}
                                            >
                                                Transaction Details
                                            </th>
                                            <th className="th4">
                                                <span>Feedback</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((r) => (
                                            <tr>
                                                {r.ratings.map((rr) => (
                                                    <>
                                                        <td>
                                                            <span>****</span>
                                                        </td>
                                                        <td>
                                                            {r.title.substring(
                                                                0,
                                                                30
                                                            )}
                                                            ...
                                                        </td>
                                                        <td>
                                                            {showAverage(r)}
                                                        </td>
                                                    </>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Store_Electronics;
{
    /*  
      {store.products.map((r) =>
                                        r.ratings.map((rr) => rr.star)
                                    )}
*/
}
