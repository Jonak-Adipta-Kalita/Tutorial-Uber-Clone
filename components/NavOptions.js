import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

const data = [
	{
		id: "123",
		title: "Get a Ride",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		title: "Order Food",
		image: "https://links.papareact.com/28w",
		screen: "FoodScreen",
	},
];

export default function NavOtions() {
	const navigation = useNavigation();
	return (
		<FlatList 
			data={data}
			horizontal
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
					onPress={() => navigation.navigate(item.screen)}
				>
					<View>
						<Image
							style={{ width: 120, height: 120, resizeMode: "contain" }}
							source={{ uri: item.image }}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
						<Icon
							type="antdesign"
							name="arrowright"
							color="white"
							style={tw`p-2 bg-black rounded-full w-10 mt-4`}
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
}
