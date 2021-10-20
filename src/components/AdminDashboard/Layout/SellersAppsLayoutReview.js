import React, { useEffect } from 'react';
import '../../../assets/boxicons-2.0.7/css/boxicons.min.css';
import '../../../assets/css/grid.css';
import '../../../assets/css/theme.css';
import '../../../assets/css/index.css';
import Sidebar from '../Sidebar/Sidebar';
import './layout.css';
import Dashboard from '../../../pages/AdminDashboard/Dashboard';
import TopNav from '../topnav/TopNav';
import Users from '../../../pages/AdminDashboard/Users';
import { useSelector, useDispatch } from 'react-redux';
import Products from '../../../pages/AdminDashboard/Products';
import ThemeAction from '../../../reducers/ThemeAction';
import SellersApps from '../../../pages/AdminDashboard/SellersApps';
import SellersAppsReview from '../../../pages/AdminDashboard/SellersAppsReview';

function SellersAppsLayoutReview({ match }) {
    const themeReducer = useSelector((state) => state.ThemeReducer);
    const { _id } = match.params;
    const dispatch = useDispatch();
    console.log(_id);

    useEffect(() => {
        const themeClass = localStorage.getItem(
            'themeMode',
            'theme-mode-light'
        );

        const colorClass = localStorage.getItem(
            'colorMode',
            'theme-mode-light'
        );

        dispatch(ThemeAction.setMode(themeClass));

        dispatch(ThemeAction.setColor(colorClass));
    }, [dispatch]);
    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar />
            <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                    <SellersAppsReview _id={_id} />
                </div>
            </div>
        </div>
    );
}

export default SellersAppsLayoutReview;
