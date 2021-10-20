import React, { useEffect, useState } from 'react';

import { getProductsByCount } from '../../functions/product';
import AdminProductCard from '../../components/cards/AdminProductCard';
import { removeProduct } from '../../functions/product';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllSellerApplications } from '../../functions/sellerApp';
import '../../styles/adminSellersApps.css';
import { Link } from 'react-router-dom';
const SellersApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(false);
    // redux
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        loadAllApps();
    }, []);

    const loadAllApps = () => {
        setLoading(true);
        getAllSellerApplications(user.token)
            .then((res) => {
                setApps(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

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

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    {loading ? (
                        <h4 className="text-danger">Loading...</h4>
                    ) : (
                        <h4>All Sellers Applications</h4>
                    )}
                    <div className="appp-container">
                        {apps.map((a) => (
                            <div className="appp" key={a._id}>
                                <span className="appp-name">
                                    {a.name},{a.businessType},{a.country}
                                </span>
                                <Link to={`/admin/sellersApps/${a._id}`}>
                                    <button className="see-app">
                                        See Application
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellersApps;
