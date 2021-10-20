import React, { useEffect } from 'react';
import '../../../assets/boxicons-2.0.7/css/boxicons.min.css';
import '../../../assets/css/grid.css';
import '../../../assets/css/theme.css';
import '../../../assets/css/index.css';
import Sidebar from '../Sidebar/Sidebar';
import './layout.css';

import TopNav from '../topnav/TopNav';

import { useSelector, useDispatch } from 'react-redux';
import Products from '../../../pages/SellerDashboard/Products';
import ThemeAction from '../../../reducers/ThemeAction';

function ProductsLayout({ match }) {
    const themeReducer = useSelector((state) => state.ThemeReducer);
    const { slug } = match.params;
    const dispatch = useDispatch();

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
                    <Products slug={slug} />
                </div>
            </div>
        </div>
    );
}

export default ProductsLayout;
