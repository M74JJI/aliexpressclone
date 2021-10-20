import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import '../../styles/login.css';
const ForgotPassword = ({ history }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        if (user && user.token) history.push('/');
    }, [user, history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp: true,
        };

        await auth
            .sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail('');
                setLoading(false);
                toast.success('Check your email for password reset link');
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
                console.log('ERROR MSG IN FORGOT PASSWORD', error);
            });
    };

    return (
        <div className="logRegModal">
            <div className="logRegModal-container">
                <div className="logReg-logo"></div>
                <ul>
                    <li style={{ marginRight: '5rem' }}>Rest your password</li>
                </ul>
                <div className="logReg-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                            placeholder="Email Address"
                        />
                        <button onClick={handleSubmit} disabled={!email}>
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
