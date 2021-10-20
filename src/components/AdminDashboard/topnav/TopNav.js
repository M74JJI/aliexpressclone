import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import './topnav.css';
import notifications from '../../../assets/JsonData/notification.json';
import user_image from '../../../assets/images/hajji.jpg';
import user_menu from '../../../assets/JsonData/user_menus.json';
import ThemeMenu from '../themeMenu/ThemeMenu';
const curr_user = {
    display_name: 'MOHAMED HAJJI',
    image: user_image,
};

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
);

const renderUserToggle = (user) => (
    <div className="topnab__right-user">
        <div className="topnav__rightr-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__rightr-user__name">{user.display_name}</div>
    </div>
);

const rednerUserMenu = (item, index) => (
    <Link to="/" key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
);

function TopNav() {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="search..." />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        // icon="bx bx-user"
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) =>
                            rednerUserMenu(item, index)
                        }
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item, index) =>
                            renderNotificationItem(item, index)
                        }
                        renderFooter={() => <Link to="/">View All</Link>}
                    />
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    );
}

export default TopNav;
