import React, { useState, useEffect } from 'react';
import UserNav from '../../components/nav/UserNav';
import { getWishlist, removeWishlist } from '../../functions/user';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import Header from '../../components/nav/header/Header';
import TopHeader from '../../components/nav/topheader/TopHeader';
import '../../styles/userOrders.css';
const Wishlist = ({ location }) => {
    const [wishlist, setWishlist] = useState([]);
    const { user } = useSelector((state) => ({ ...state }));
    const isCurrentPage = location.pathname;
    useEffect(() => {
        loadWishlist();
    }, []);

    const loadWishlist = () =>
        getWishlist(user.token).then((res) => {
            // console.log(res);
            setWishlist(res.data.wishlist);
        });

    const handleRemove = (productId) =>
        removeWishlist(productId, user.token).then((res) => {
            loadWishlist();
        });

    return (
        <>
            <TopHeader />
            <Header />
            <div className="userOrders">
                <div className="userOrders-container">
                    <div className="userNav-menu">
                        <h5>Orders</h5>
                        <Link to="/user/orders">All orders</Link>
                        <Link
                            to="/user/wishlist"
                            className={isCurrentPage && 'selected-nav'}
                        >
                            Wishlist
                        </Link>
                        <Link>Deleted & Orders</Link>
                        <Link>Manage Feedback</Link>
                        <Link to="/user/password">Change Password</Link>
                        <Link>My Coupons</Link>
                        <Link>My Select Coupon</Link>
                        <Link>Shipping Address</Link>
                    </div>
                    <div className="userOrders-form">
                        <h5>Wishlist</h5>
                        <div className="wishlis-wrap">
                            {wishlist.map((w) => (
                                <div className="wishist-card">
                                    <Link to={`/product/${w.slug}`}>
                                        <img src={w.images[0].url} alt="" />{' '}
                                    </Link>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            padding: '5px',
                                        }}
                                    >
                                        {w.title.substring(0, 40)}
                                    </span>

                                    <button
                                        className="wish-btn-remove"
                                        onClick={() => handleRemove(w._id)}
                                    >
                                        -
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
