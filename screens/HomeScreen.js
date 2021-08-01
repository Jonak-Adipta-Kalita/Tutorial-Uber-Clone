import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

export default function HomeScreen() {
	const dispatch = useDispatch();
	return (
		<SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{ uri: "https://links.papareact.com/gzs" }}
				/>
				<GooglePlacesAutocomplete
					placeholder='From Where?'
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					onPress={(data, details = null) => {
						dispatch(setOrigin({
							location: details.geometry.location,
							description: data.description,
						}))
						dispatch(setDestination(null))
					}}
					fetchDetails={true}
					enablePoweredByContainer={false}
					minLength={2}
					returnKeyType={"search"}
					query={{
						key: GOOGLE_MAPS_KEY,
						language: 'en',
					}}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={400}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {},
});
