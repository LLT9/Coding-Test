import React from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useTranslation } from "react-i18next";
const staffData = [
	{
		id: "technine_01",
		name: "Staff 01",
		age: "31",
		tel: "+852-12345678",
	},
	{
		id: "technine_02",
		name: "Staff 02",
		age: "21",
		tel: "+852-00000000",
	},
	{
		id: "technine_03",
		name: "Staff 03",
		age: "22",
		tel: "+852-11111111",
	},
	{
		id: "technine_04",
		name: "Staff 04",
		age: "23",
		tel: "+852-22222222",
	},
	{
		id: "technine_05",
		name: "Staff 05",
		age: "46",
		tel: "+852-33333333",
	},
	{
		id: "technine_06",
		name: "Staff 06",
		age: "27",
		tel: "+852-44444444",
	},
	{
		id: "technine_08",
		name: "Staff 07",
		age: "34",
		tel: "+852-55555555",
	},
	{
		id: "technine_09",
		name: "Staff 07",
		age: "34",
		tel: "+852-66666666",
	},
	{
		id: "technine_10",
		name: "Staff 07",
		age: "34",
		tel: "+852-77777777",
	},
];

const Item = ({ item, onPress }) => (
	<TouchableOpacity onPress={onPress} style={styles.item}>
		<Text style={styles.title}>{item.name}</Text>
	</TouchableOpacity>
);

const HomePage = ({ navigation }) => {
	const { t } = useTranslation();
	const renderItem = ({ item }) => (
		<Item
			item={item}
			onPress={() =>
				navigation.navigate("UserDetail", { staff: item })
			}
		/>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={staffData}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 40,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 24,
	},
});

export default HomePage;
