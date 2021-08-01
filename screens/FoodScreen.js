import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';

export default function FoodScreen() {
	return (
		<SafeAreaView style={[tw`bg-white h-full`,styles.container]}>
			<StatusBar style="auto" />
			<View style={tw`p-5`}>
				<Text>Still in Development</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {},
});
