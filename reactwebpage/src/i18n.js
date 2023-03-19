import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translate/en.json";
import tw from "./translate/tw.json";

const resources = {
    en: {
        translation: en,
    },
    zh: {
        translation: tw,
    },
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
