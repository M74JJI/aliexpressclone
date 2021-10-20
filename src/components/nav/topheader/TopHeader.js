import React, { useEffect, useState } from 'react';
import { Menu, Badge, Avatar } from 'antd';
import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
    LogoutOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,
    HeartOutlined,
    MessageOutlined,
    ArrowDownOutlined,
} from '@ant-design/icons';
import { FaOpencart, FaRegUser } from 'react-icons/fa';
import { RiHeart2Line } from 'react-icons/ri';
import { FcPhoneAndroid } from 'react-icons/fc';
import { MdArrowDropDown } from 'react-icons/md';
import { RiApps2Line, RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { IoHelpCircleOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Search from '../../forms/Search';
import './topheader.css';
const { SubMenu, Item } = Menu;

const TopHeader = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [current, setCurrent] = useState('home');
    const [show, handleShow] = useState(false);
    let { user, cart, search } = useSelector((state) => ({ ...state }));
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
        history.push('/');
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
        <header className="topheader">
            <div className="topheader-container">
                <div className="topheader-nav">
                    <div className="topheader-navItem ">
                        <a href="/sell-with-us">
                            <span>Sell on AliExpress</span>
                        </a>
                    </div>

                    <div className="topheader-navItem ">
                        <span>Help</span>
                        <RiArrowDownSFill className="icon" />
                        <RiArrowUpSFill className="icon icon1" />
                        <ul>
                            <li>
                                <Link>Customer Service</Link>
                            </li>
                            <li>
                                <Link>Disputes & Reports</Link>
                            </li>
                            <li>
                                <Link>Report IPR infringement</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="topheader-navItem ">
                        <Link>Buyer Protection</Link>
                    </div>
                    <div className="topheader-navItem app">
                        <Link>App</Link>
                    </div>
                    <div className="topheader-navItem ">
                        <img
                            src="../../icons/maroc.png"
                            alt=""
                            style={{ width: '25px' }}
                        />

                        <span>/English/MAD</span>
                        <RiArrowDownSFill className="icon" />
                        <RiArrowUpSFill className="icon icon1" />
                    </div>
                    <div className="topheader-navItem wishAcc">
                        <i
                            class="ng-wishlist-icon ng-icon-size"
                            data-spm-anchor-id="a2g0o.home.1000001.i1.3ea921454GvNcq"
                        ></i>
                        <Link to="/user/wishlist">Wishlist</Link>
                    </div>
                    <div className="topheader-navItem wishAcc">
                        <i
                            class="ng-account-icon ng-icon-size"
                            ami-survive="1"
                            data-spm-anchor-id="a2g0o.home.1000001.i2.3ea921454GvNcq"
                        ></i>
                        <Link>Account</Link>{' '}
                        <ul>
                            {user && (
                                <li>
                                    <Link to="/user/orders">
                                        {user ? (
                                            user.name
                                        ) : (
                                            <Link to="/login">login</Link>
                                        )}
                                    </Link>
                                </li>
                            )}
                            <li>
                                <Link to="/user/orders">Orders</Link>
                            </li>
                            <li>
                                <Link>Disputes & Reports</Link>
                            </li>
                            {user && (
                                <li>
                                    <Link onClick={logout}>Sign Out</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;
