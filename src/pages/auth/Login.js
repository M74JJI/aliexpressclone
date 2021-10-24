import React, { useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../../firebase';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { MailOutlined, GoogleOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrUpdateUser } from '../../functions/auth';
import '../../styles/login.css';
const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [log, setLog] = useState(true);
    const [reg, setReg] = useState(false);
    const [showLog, setShowLog] = useState(false);
    const { user } = useSelector((state) => ({ ...state }));
    let intended = history.location.state;
    useEffect(() => {
        if (intended) {
            return;
        } else {
            if (user && user.token) history.push('/');
        }
    }, [user, history]);

    let dispatch = useDispatch();

    const roleBasedRedirect = (res) => {
        // check if intended

        if (intended) {
            history.push(intended.from);
        } else {
            if (res.data.role === 'admin') {
                history.push('/admin/dashboard');
            } else {
                history.push('/user/history');
            }
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
            if (!email) {
                toast.error('Please Enter Your Email');
            }
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
    return (
        <div className="logRegModal">
            <div className="logRegModal-container">
                <a href="/">
                    {' '}
                    <div className="logReg-logo"></div>
                </a>
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
                        <button onClick={handleSubmit}>
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
};

export default Login;
