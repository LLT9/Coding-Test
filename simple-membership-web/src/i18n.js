import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';


//自行指定各語言的檔案
// import en from "./locales/en/translation.json";
// import tw from "./locales/zh_tw/translation.json";
// const resources = {
//   en: {translation: en},
//   zh: {translation: tw},
// };

// i18n.use(initReactI18next).init({
//   resources,
//   fallbackLng: "zh_tw",
//   lng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

//使用public內的檔案，根據資料夾名稱引用
i18n.use(Backend).use(initReactI18next).init({
  fallbackLng: "zh_tw",
  // lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;