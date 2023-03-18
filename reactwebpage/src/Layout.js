import { Outlet, Link } from "react-router-dom";

import React from "react";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Index</Link>
                    </li>
                    <li>
                        <Link to='/welcome'>Welcome</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
