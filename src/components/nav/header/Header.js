import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Menu, Badge, Avatar } from 'antd';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Search from '../../forms/Search';
import CategoryMenu from '../../mainHome/CategoryMenu';

const { SubMenu, Item } = Menu;
function Header({ isUserPgae }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [current, setCurrent] = useState('home');
    const [show, handleShow] = useState(false);
    const { user, cart, search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
    };

    const logout = () => {
        firebase.auth().signOut();
        dispatch({
            type: 'LOGOUT',
            payload: null,
        });
        history.push('/login');
    };
    const handleChange = (e) => {
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: e.target.value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/shop?${text}`);
    };
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [show]);
    return (
        <header className={show ? 'header fixed-header' : 'header'}>
            <div
                className={
                    show
                        ? 'header-container fixed-container'
                        : 'header-container'
                }
            >
                <div className="header-left">
                    <div className="header-logo">
                        <a href="/">
                            <span className={show ? 'fixed-logo' : 'logo'}>
                                AliExpress
                            </span>
                            {show && (
                                <div div className="hovered">
                                    <div className="category-fixed"></div>
                                    <div className="category-hovered">
                                        <CategoryMenu />
                                    </div>
                                </div>
                            )}

                            {!show && (
                                <span className="slogan">
                                    Smarter Shopping, Better Living!
                                </span>
                            )}
                        </a>
                    </div>
                </div>
                <div className="header-middle">
                    <form className="search" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            class="searchTerm"
                            placeholder="What are you looking for?"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            class="searchButton"
                            onSubmit={handleSubmit}
                        ></button>
                    </form>
                </div>
                <div className="header-right">
                    <Link to="/cart">
                        <i
                            class="right-cart-icon"
                            data-spm-anchor-id="a2g0o.home.1000002.i2.3ea921454GvNcq"
                        ></i>{' '}
                        <span>{cart.length}</span>
                    </Link>
                </div>
                {user && user.role === 'seller' && user.hasStore === false ? (
                    <Link to="seller/createstore">Create Store</Link>
                ) : (
                    ''
                )}
            </div>
        </header>
    );
}

export default Header;
