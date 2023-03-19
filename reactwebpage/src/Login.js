import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = ({ user }) => {
    // const [user, setUser] = useState(null);
    // const handleLogin = () => setUser({ id: 1, name: "Mario" });
    // const handleLogout = () => setUser(null);
    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("false");

    const submitBtn = (e) => {
        e.preventDefault();
        setLogin(true);
    };

    const style = { width: "60%", height: "20%" };

    return (
        <div className='Login'>
            <div className='divwel'>
                <h1 className='h1wel' title='click to login'>
                    Welcome
                </h1>
                <section className='login'>
                    <section className='acc'>
                        <label for='acc' style={{ marginRight: "5%" }}>
                            account
                        </label>
                        <input
                            type='text'
                            name='acc'
                            id='acc'
                            className='account'
                            placeholder='enter your account'
                            style={style}
                        />
                    </section>
                    <section className='psw'>
                        <label for='psw' style={{ marginRight: "5%" }}>
                            password
                        </label>
                        <input
                            type='password'
                            name='psw'
                            id='psw'
                            className='password'
                            placeholder='enter your password'
                            style={style}
                        />
                    </section>
                    <section className='btn'>
                        <input type='button' value='clear' className='clear' style={{ marginRight: "5%" }} />
                        <input type='button' value='submit' className='submit' style={{ marginLeft: "5%" }} />
                    </section>
                </section>
                {/* <label htmlFor=''>Account</label>
                <input type='text' placeholder='Enter your account' id='account' name='account' />
                <br />
                <label htmlFor=''>Password</label>
                <input type='password' placeholder='Enter your password' id='password' name='password' /> */}
            </div>
        </div>
    );
};

export default Login;
