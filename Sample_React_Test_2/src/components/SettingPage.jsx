import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

const SettingPage = () => {
	const { t, i18n } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
		setLanguage(lang);
	};

	return (
		<View style={styles.container}>
			<Text>{t("settingPage")}</Text>
			<View style={styles.languageButtons}>
				<Button
					title="English"
					onPress={() => changeLanguage("en")}
					color={language === "en" ? "blue" : "gray"}
				/>
				<Button
					title="繁體中文"
					onPress={() => changeLanguage("zh")}
					color={language === "zh" ? "blue" : "gray"}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	languageButtons: {
		flexDirection: "row",
		marginTop: 20,
	},
});

export default SettingPage;
