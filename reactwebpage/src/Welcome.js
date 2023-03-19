import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    // const [lang, setLang] = useState < Lang > null;
    // useEffect(() => {
    //     if (lang !== null) i18n.changeLanguage(lang.value);
    // }, [lang]);

    // setLang("tw");
    // setLang("en");

    return (
        <div className='Welcome'>
            <div className='divwel'>
                <h1 className='h1wel'>{t("Welcome")}</h1>
            </div>
        </div>
    );
};

export default Welcome;
