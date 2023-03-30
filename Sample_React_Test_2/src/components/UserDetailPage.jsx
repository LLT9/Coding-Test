import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
const UserDetailPage = ({ route, navigation }) => {
	const { staff } = route.params;
	const { t } = useTranslation();
	return (
		<View style={styles.container}>
			<Text>
				{t("id")}:: {staff.id}
			</Text>
			<Text>
				{t("name")}: {staff.name}
			</Text>
			<Text>
				{t("age")}: {staff.age}
			</Text>
			<Text>
				{t("tel")}: {staff.tel}
			</Text>
			<Button title="Back" onPress={() => navigation.goBack()} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
	},
});

export default UserDetailPage;
