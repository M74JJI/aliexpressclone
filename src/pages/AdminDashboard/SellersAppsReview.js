import React, { useEffect, useState } from 'react';

import { getProductsByCount } from '../../functions/product';
import AdminProductCard from '../../components/cards/AdminProductCard';
import { removeProduct } from '../../functions/product';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
    AcceptSellerApp,
    getAllSellerApplications,
} from '../../functions/sellerApp';
import '../../styles/adminSellersApps.css';
import { Link } from 'react-router-dom';
const SellersAppsReview = ({ _id }) => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(false);
    // redux
    const { user } = useSelector((state) => ({ ...state }));

    {
        /*   const handleRemove = (slug) => {
        // let answer = window.confirm("Delete?");
        if (window.confirm('Delete?')) {
            // console.log("send delete request", slug);
            removeProduct(slug, user.token)
                .then((res) => {
                    loadAllApps();
                    toast.error(`${res.data.title} is deleted`);
                })
                .catch((err) => {
                    if (err.response.status === 400)
                        toast.error(err.response.data);
                    console.log(err);
                });
        }
    };*/
    }

    const accepter = () => {
        AcceptSellerApp(user.token, _id);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    {loading ? (
                        <h4 className="text-danger">Loading...</h4>
                    ) : (
                        <h4>Application num {_id}</h4>
                    )}
                    <div className="appp-container">
                        <button onClick={accepter}>Accepter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellersAppsReview;
