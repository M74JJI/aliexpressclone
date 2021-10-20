import React from 'react';
import './sheader.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function SHeader() {
    const { user } = useSelector((state) => ({ ...state }));
    return (
        <div className="sheader">
            {user && user.role === 'seller' && user.hasStore === false ? (
                <>
                    Your Seller Application has Been Accepted Click the Link to
                    Create Your Store
                    <Link to="/seller/createstore">Create Store</Link>
                </>
            ) : user && user.role === 'seller' && user.hasStore === true ? (
                <>
                    <Link to="/seller/createProduct/">
                        {' '}
                        Go to your Store Dashboard
                    </Link>
                </>
            ) : user && user.role == 'admin' ? (
                <Link to="/admin/dashboard">Go to Admin Dashboard</Link>
            ) : (
                ''
            )}
        </div>
    );
}
export default SHeader;
