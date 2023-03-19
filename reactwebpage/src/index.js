import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { useTranslation } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
