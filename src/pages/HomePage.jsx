import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../actions/auth";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const adminAccount = "admin";
    const adminPassword = "Admin&8181";
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (user) {
            navigate("/welcome");
        }
    }, [user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (account === "" || password === "") {
            return alert(t("no-input"));
        } else if (account === "") {
            return alert(t("no-Accoun"));
        } else if (password === "") {
            return alert(t("no-Password"));
        } else if (account === adminAccount && password === adminPassword) {
            const user = { account, password };
            dispatch(loginSuccess(user));
            navigate("/welcome");
        } else {
            alert(t("Invalid"));
        }
    };
    return (
        <div className="homepage">
            <div className="homepage-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="account-container">
                            <label htmlFor="account">{t("Account")}</label>
                            : &nbsp;
                            <input
                                type="text"
                                name="account"
                                id="account"
                                placeholder={t("point-Account")}
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                            />
                        </div>
                        <div className="password-container">
                            <label htmlFor="password">{t("Password")}</label>
                            : &nbsp;
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder={t("point-Password")}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">{t("Submit")}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
