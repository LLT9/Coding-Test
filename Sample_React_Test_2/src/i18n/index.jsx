import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				articlePage: "Article Page",
				id: "ID",
				name: "Name",
				age: "Age",
				tel: "Tel",
				settingPage: "Setting Page",
				username: "username",
				password: "password",
				login: "Login",
				home: "Home",
				article: "Article",
				setting: "Setting",
			},
		},
		zh: {
			translation: {
				articlePage: "文章頁面",
				id: "編號",
				name: "姓名",
				age: "年齡",
				tel: "電話",
				settingPage: "設定頁面",
				username: "登入帳號",
				password: "登入密碼",
				login: "登入",
				home: "首頁",
				article: "文章",
				setting: "設定",
			},
		},
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false,
	},
});

export default i18n;
