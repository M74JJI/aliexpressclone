import React, { useState } from 'react';
import UserNav from '../../components/nav/UserNav';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import '../../styles/userChangePassword.css';
import Header from '../../components/nav/header/Header';
import TopHeader from '../../components/nav/topheader/TopHeader';
import { Link } from 'react-router-dom';
const Password = ({ location }) => {
    const [password, setPassword] = useState('');
    const [verifiedPassword, setVerifiedPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isPasswordShown1, setIsPasswordShown1] = useState(false);
    const isCurrentPage = location.pathname;

    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };
    const togglePasswordVisibility1 = () => {
        setIsPasswordShown1(!isPasswordShown1);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(password);

        if (password === verifiedPassword) {
            await auth.currentUser
                .updatePassword(password)
                .then(() => {
                    setLoading(false);
                    setPassword('');
                    toast.success('Password updated');
                })
                .catch((err) => {
                    setLoading(false);
                    toast.error(err.message);
                });
        } else {
            setLoading(false);
            toast('passwords not matching');
        }
    };

    const passwordUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Your Password</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter new password"
                    disabled={loading}
                    value={password}
                />
                <button
                    className="btn btn-primary"
                    disabled={!password || password.length < 6 || loading}
                >
                    Submit
                </button>
            </div>
        </form>
    );

    return (
        <>
            <TopHeader />
            <Header />
            <div className="userOrders">
                <div className="userOrders-container">
                    <div className="userNav-menu">
                        <h5>Orders</h5>
                        <Link to="/user/orders">All orders</Link>
                        <Link to="/user/wishlist">Wishlist</Link>
                        <Link>Deleted & Orders</Link>
                        <Link>Manage Feedback</Link>
                        <Link
                            to="/user/password"
                            className={isCurrentPage && 'selected-nav'}
                        >
                            Change Password
                        </Link>
                        <Link>My Coupons</Link>
                        <Link>My Select Coupon</Link>
                        <Link>Shipping Address</Link>
                    </div>
                    <div className="userOrders-form">
                        <h5>Change Password</h5>
                        <form
                            className="updatePassword-form"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label>New Password</label>
                                <input
                                    type={isPasswordShown ? 'text' : 'password'}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter new password"
                                    disabled={loading}
                                    value={password}
                                />
                                <i
                                    className={
                                        password != ''
                                            ? 'fa fa-eye password-icon'
                                            : 'hidden'
                                    }
                                    onClick={togglePasswordVisibility}
                                ></i>
                            </div>
                            <div>
                                <label>Repeat Password</label>
                                <input
                                    type={
                                        isPasswordShown1 ? 'text' : 'password'
                                    }
                                    onChange={(e) =>
                                        setVerifiedPassword(e.target.value)
                                    }
                                    placeholder="Enter new password"
                                    disabled={loading}
                                    value={verifiedPassword}
                                />{' '}
                                <i
                                    className={
                                        verifiedPassword != ''
                                            ? 'fa fa-eye password-icon'
                                            : 'hidden'
                                    }
                                    onClick={togglePasswordVisibility1}
                                ></i>
                            </div>{' '}
                            <button
                                className="btn-updatePass"
                                disabled={
                                    !password || password.length < 6 || loading
                                }
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Password;
