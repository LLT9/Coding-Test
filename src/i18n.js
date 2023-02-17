import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_en from './translation/en.json';
import translation_zh from './translation/zh.json';

// the translations
const resources = {
  en: {
    translation: translation_en
  },
  zh_hk: {
    translation: translation_zh
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en", // get the lang chioce from the localstorage if no, set to en
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;