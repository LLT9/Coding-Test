import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";

import HomePage from "./pages/HomePage";
import Welcome from "./pages/Welcome";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";

function App() {
    const user = useSelector((state) => state.auth.isAuthenticated);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={user ? <Welcome /> : <HomePage />} />
                    <Route path="/welcome" element={<PrivateRoute />}>
                        <Route index element={<Welcome />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
