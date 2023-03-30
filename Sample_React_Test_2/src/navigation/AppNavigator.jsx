import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import UserDetailPage from "../components/UserDetailPage";
import SettingPage from "../components/SettingPage";
import ArticlePage from "../components/ArticlePage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { useTranslation } from "react-i18next";

const HomeStack = () => {
	const { t } = useTranslation();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomePage}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="UserDetail" component={UserDetailPage} />
		</Stack.Navigator>
	);
};

const AppNavigator = () => {
	const { t } = useTranslation();
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name={t("login")} component={LoginPage} />
				<Tab.Screen name={t("home")} component={HomeStack} />
				<Tab.Screen name={t("article")} component={ArticlePage} />
				<Tab.Screen name={t("setting")} component={SettingPage} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
