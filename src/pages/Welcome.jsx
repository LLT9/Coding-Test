import React from "react";
import { useTranslation } from "react-i18next";
const Welcome = () => {
    const { t } = useTranslation();
    return (
        <div className="welcome">
            <div className="welcome-container">
                <div className="welcome-container-itme">{t("Welcome")}</div>
            </div>
        </div>
    );
};

export default Welcome;
