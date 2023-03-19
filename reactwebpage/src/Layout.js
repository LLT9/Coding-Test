import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import React from "react";

const Layout = () => {
    return (
        <div className='Layout'>
            <nav style={{ backgroundColor: "skyblue" }}>
                <ul className='navbar' style={{}}>
                    <li className='nav' style={{}}>
                        <Link to='/'>Login</Link>
                    </li>
                    <li className='nav' style={{}}>
                        <Link to='/welcome'>Welcome</Link>
                    </li>
                    <li className='nav' style={{}}>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
