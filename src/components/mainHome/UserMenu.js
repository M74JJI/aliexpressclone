import React, { useEffect, useState } from 'react';
import '../../styles/Right.css';
import { useSelector, useDispatch } from 'react-redux';
import { auth, googleAuthProvider } from '../../firebase';
import { BiUser } from 'react-icons/bi';
import { FcList } from 'react-icons/fc';
import {
    UnorderedListOutlined,
    UserOutlined,
    MessageOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { getProductsByCount } from '../../functions/product';
import { toast } from 'react-toastify';
import { createOrUpdateUser } from '../../functions/auth';
function UserMenu() {
    let dispatch = useDispatch();
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showLog, setShowLog] = useState(false);
    const [log, setLog] = useState(false);
    const [reg, setReg] = useState(false);
    const [twoProducts, setTwoProducts] = useState([]);
    const { user } = useSelector((state) => ({ ...state }));
    console.log(user);
    useEffect(() => {
        let intended = history.location.state;
        if (intended) {
            return;
        } else {
            if (user && user.token) history.push('/');
        }
    }, [user, history]);

    const roleBasedRedirect = (res) => {
        // check if intended
        let intended = history.location.state;
        if (intended) {
            history.push(intended.from);
        } else {
            if (res.data.role === 'admin') {
                history.push('/admin/dashboard');
            }
            if (res.data.role === 'seller') {
                history.push('/');
            } else {
                history.push('/');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.table(email, password);
        if (log) {
            try {
                const result = await auth.signInWithEmailAndPassword(
                    email,
                    password
                );
                const { user } = result;
                const idTokenResult = await user.getIdTokenResult();

                createOrUpdateUser(idTokenResult.token)
                    .then((res) => {
                        dispatch({
                            type: 'LOGGED_IN_USER',
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id,
                                hasStore: res.data.hasStore,
                                sentApp: res.data.sentApp,
                            },
                        });
                        setShowLog(false);
                        roleBasedRedirect(res);
                    })
                    .catch((err) => console.log(err));

                // history.push("/");
            } catch (error) {
                console.log(error);
                toast.error(error.message);
                setLoading(false);
            }
        } else {
            const config = {
                url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
                handleCodeInApp: true,
            };

            await auth.sendSignInLinkToEmail(email, config);
            toast.success(
                `Email is sent to ${email}. Click the link to complete your registration.`
            );
            // save user email in local storage
            window.localStorage.setItem('emailForRegistration', email);
            // clear state
            setEmail('');
        }
    };

    const googleLogin = async () => {
        auth.signInWithPopup(googleAuthProvider)
            .then(async (result) => {
                const { user } = result;
                const idTokenResult = await user.getIdTokenResult();
                createOrUpdateUser(idTokenResult.token)
                    .then((res) => {
                        dispatch({
                            type: 'LOGGED_IN_USER',
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id,
                                hasStore: res.data.hasStore,
                                sentApp: res.data.sentApp,
                            },
                        });
                        setShowLog(false);
                        roleBasedRedirect(res);
                    })
                    .catch((err) => console.log(err));
                // history.push("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
            });
    };

    useEffect(() => {
        getProductsByCount(2).then((res) => {
            setTwoProducts(res.data);
        });
    });

    const handleShowSignIn = () => {
        setShowLog(true);
        setLog(true);
        setReg(false);
    };
    const handleShowSignUp = () => {
        setShowLog(true);
        setReg(true);
        setLog(false);
    };
    const logRegModal = () => (
        <div className="logRegModal">
            <div className="logRegModal-container">
                <CloseOutlined
                    className="closeLogReg"
                    onClick={() => setShowLog(false)}
                />
                <div className="logReg-logo"></div>
                <ul>
                    <li onClick={handleShowSignUp}>Register</li>
                    <div
                        className={reg ? 'selectedLine1 w100' : 'selectedLine1'}
                    ></div>
                    <li onClick={handleShowSignIn}>Sign In</li>
                    <div
                        className={log ? 'selectedLine2 w100' : 'selectedLine2'}
                    ></div>
                </ul>
                <div className="logReg-form">
                    <form onSubmit={handleSubmit}>
                        {reg && (
                            <div className="benifits">
                                <span></span>
                                <span>
                                    Register now to get $3 New User Coupon.
                                </span>
                            </div>
                        )}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                            placeholder={
                                log
                                    ? 'Email address or member ID'
                                    : 'Email address'
                            }
                        />
                        {log && (
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        )}
                        <button
                            onClick={handleSubmit}
                            disabled={!email || password.length < 6}
                        >
                            {reg ? 'CREATE ACCOUNT' : 'SIGN IN'}
                        </button>{' '}
                        {log && (
                            <Link to="/forgot_password">Forget Password?</Link>
                        )}
                    </form>
                </div>
                <div className="logReg-quick">
                    <span>By creating an account, you agree to the</span>
                    <div className="logReg-privacy">
                        <Link>AliExpress.com Free Membership Agreement </Link>
                        &nbsp;
                        <span>and</span>&nbsp;
                        <Link>Privacy Policy</Link>
                    </div>
                    <span className="logReg-quickText">Quick access with</span>
                    <button className="google" onClick={googleLogin}></button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {showLog && logRegModal()}
            <div className="user-menu">
                <div className="pp">
                    <div className="pp-img">
                        <img src="//ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png" />
                    </div>
                    <div className="pp-text">
                        {user && user.token
                            ? `Hi, ${user.email.split('@')[0]}`
                            : 'Welcome, to AliExpress'}
                    </div>
                </div>
                <div className="user-buttons">
                    {user ? (
                        <div className="user-list">
                            <Link to="user/orders">
                                <span className="user-acc1-1">&nbsp;</span>
                                <span className="user-acc1-2">Account</span>
                            </Link>
                            <Link to="user/orders">
                                <span className="user-acc2-1">&nbsp;</span>
                                <span className="user-acc2-2">Orders</span>
                            </Link>
                            <Link to="/user/wishlist">
                                <span className="user-acc3-1">&nbsp;</span>
                                <span className="user-acc3-2">Wishlist</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="user-buttons-container">
                            <Link onClick={handleShowSignUp}>Join</Link>
                            <Link onClick={handleShowSignIn}>Sign In</Link>
                        </div>
                    )}
                </div>
                <div className="user-ad">
                    <div className="user-ad-container">
                        <Link>
                            <div className="user-text">
                                <div className="user-text1">
                                    Your fave shopping guide
                                </div>
                                <div className="user-text2">
                                    Check out the latest new deals
                                </div>
                            </div>
                        </Link>
                        <div className="user-cards">
                            <div className="user-card-container">
                                <Link to="/product/children's-bed-boy-girl-princess-bed-1.5-creative-car-1.2m-cartoon-with-guardrail-single-bed-sports-car-leather-bed">
                                    <div className="user-card1">
                                        <img
                                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633718233/fngrqwobdws0st0zgo5u.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="user-cardPrice">
                                        <span>US $2332</span>
                                    </div>
                                </Link>
                                <Link to="/product/2021-lige-new-watch-men-automatic-mechanical-tourbillon-clock-fashion-sport-diving-watch-100atm-waterproof-luminous-watches-mens">
                                    <div className="user-card1">
                                        <img
                                            src="https://ae01.alicdn.com/kf/Hc60fa83570784bcbbaf279f3f63e56fb2.jpg_100x100Q90.jpg_.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="user-cardPrice">
                                        <span>US $44.99</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserMenu;
