import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

// import en from "./locales/en.json";
// import zh_tw from "./locales/zh_tw.json";

// const resources = {
//   en: { translation: en },
//   "zh-tw": { translation: zh_tw },
// };

i18n.use(Backend).use(initReactI18next).init({
  // resources,
  fallbackLng: "zh_tw",
  lng: "zh_tw",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;