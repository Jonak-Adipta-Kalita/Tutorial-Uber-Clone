import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';
import Map from "../components/Map";

export default function MapScreen() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
