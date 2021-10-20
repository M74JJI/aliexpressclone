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

import ThemeAction from '../../../reducers/ThemeAction';
function UsersLayout() {
    const themeReducer = useSelector((state) => state.ThemeReducer);

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
                    <Users />
                </div>
            </div>
        </div>
    );
}

export default UsersLayout;
