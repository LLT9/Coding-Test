import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translateion.json";
import zh_hk from "./locales/zh_hk/translateion.json";

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh_hk,
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
