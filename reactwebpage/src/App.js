import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Login from "./Login";

function App() {
    return (
        <BrowserRouter>
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
