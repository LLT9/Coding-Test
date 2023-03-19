import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Login from "./Login";
import "./styles/style.css";

function App() {
    // const [user, setUser] = useState(null);
    // const handleLogin = () => setUser({ id: 1, name: "Mario" });
    // const handleLogout = () => setUser(null);
    return (
        <BrowserRouter>
            {/* <div>
                Update Status:
                {user ? <button onClick={handleLogout}></button> : <button onClick={handleLogin}></button>}
            </div> */}
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Login />}></Route>
                    <Route path='welcome' element={<Welcome />}></Route>
                    <Route path='profile' element={<Profile />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
