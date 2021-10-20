import React, { useState, useEffect, useRef } from 'react';
import UserNav from '../../components/nav/UserNav';
import { getUserOrders } from '../../functions/user';
import { useSelector, useDispatch } from 'react-redux';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ShowPaymentInfo from '../../components/cards/ShowPaymentInfo';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../../components/order/Invoice';
import Header from '../../components/nav/header/Header';
import TopHeader from '../../components/nav/topheader/TopHeader';
import '../../styles/userOrders.css';
const History = ({ location }) => {
    const [orders, setOrders] = useState([]);
    const { user } = useSelector((state) => ({ ...state }));
    const [isUserPgae, setIsUserPage] = useState(false);
    const isCurrentPage = location.pathname;

    useEffect(() => {
        loadUserOrders();
        if (window.location.href == 'http://localhost:3000/user/orders') {
            setIsUserPage(true);
        }
    }, []);

    const loadUserOrders = () =>
        getUserOrders(user.token).then((res) => {
            console.log(JSON.stringify(res.data, null, 4));
            setOrders(res.data);
        });

    const showOrderInTable = (order) => (
        <table className="table table-bordered" style={{ width: '800px' }}>
            <thead className="thead">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Color</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Shipping</th>
                </tr>
            </thead>

            <tbody>
                {order.products.map((p, i) => (
                    <tr key={i}>
                        <td>
                            <b>{p.product.title.substring(0, 50)}</b>
                        </td>
                        <td>{p.product.price}</td>
                        <td>{p.product.brand}</td>
                        <td>{p.color}</td>
                        <td>{p.count}</td>
                        <td>
                            {p.product.shipping === 'Yes' ? (
                                <CheckCircleOutlined
                                    style={{ color: 'green' }}
                                />
                            ) : (
                                <CloseCircleOutlined style={{ color: 'red' }} />
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const showDownloadLink = (order) => (
        <PDFDownloadLink
            document={<Invoice order={order} />}
            fileName="receipt.pdf"
            className="btn-pdf"
        >
            Download Receipt
        </PDFDownloadLink>
    );

    const showEachOrders = () =>
        orders.reverse().map((order, i) => (
            <div key={i} className="m-5 p-3 card">
                <ShowPaymentInfo order={order} />
                {showOrderInTable(order)}
                <div className="row">
                    <div className="col">{showDownloadLink(order)}</div>
                </div>
            </div>
        ));

    return (
        <>
            <TopHeader />
            <Header />
            <div className="userOrders">
                <div className="userOrders-container">
                    <div className="userNav-menu">
                        <h5>Orders</h5>
                        <Link
                            to="/user/orders"
                            className={isCurrentPage && 'selected-nav'}
                        >
                            All orders
                        </Link>
                        <Link to="/user/wishlist">Wishlist</Link>
                        <Link>Deleted & Orders</Link>
                        <Link>Manage Feedback</Link>
                        <Link to="/user/password">Change Password</Link>
                        <Link>My Coupons</Link>
                        <Link>My Select Coupon</Link>
                        <Link>Shipping Address</Link>
                    </div>
                    <div className="userOrders-form">
                        <h5>Orders</h5>
                        {showEachOrders()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
{
    /*  
 <div className="row">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className="col text-center">
                    <h4>
                        {orders.length > 0
                            ? 'User purchase orders'
                            : 'No purchase orders'}
                    </h4>
                    {showEachOrders()}
                </div>
            </div>

*/
}
