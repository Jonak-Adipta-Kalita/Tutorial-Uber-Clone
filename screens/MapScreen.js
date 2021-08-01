import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';

export default function MapScreen() {
	return (
		<SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {},
});
