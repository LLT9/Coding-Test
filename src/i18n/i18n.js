import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resource';

i18n.use(initReactI18next).init({
  fallbackLng: 'zh',
  lng: 'zh',
  resources, //引入字典檔
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
