import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { logout } from "./actions/auth";

const Layout = () => {
    const user = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div>
            <div className="nav">
                <div className="nav-item-1">
                    <Link to="/">{t("Home")}</Link>
                </div>
                <div className="nav-item-2">
                    <div className="change-lan">
                        <button onClick={() => changeLanguage("en")}>
                            English
                        </button>
                        <button onClick={() => changeLanguage("zh")}>
                            中文
                        </button>
                    </div>
                    {user ? (
                        <Link onClick={handleLogout}>{t("Logout")}</Link>
                    ) : (
                        <Link to="/">{t("Login")}</Link>
                    )}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;
