import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
} from "react-native";
import { useTranslation } from "react-i18next";

const LoginPage = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const { t } = useTranslation();
	const handleLogin = async () => {
		if (username === "admin" && password === "Admin&8181") {
			await AsyncStorage.setItem("username", username);
			await AsyncStorage.setItem("password", password);
			navigation.navigate("Home");
		} else {
			setErrorMessage("Invalid username or password");
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder={t("username")}
				onChangeText={setUsername}
				value={username}
			/>
			<TextInput
				style={styles.input}
				placeholder={t("password")}
				secureTextEntry
				onChangeText={setPassword}
				value={password}
			/>
			<Button title={t("login")} onPress={handleLogin} />
			{errorMessage ? (
				<Text style={styles.error}>{errorMessage}</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 8,
	},
	error: {
		color: "red",
		marginTop: 10,
	},
});

export default LoginPage;
