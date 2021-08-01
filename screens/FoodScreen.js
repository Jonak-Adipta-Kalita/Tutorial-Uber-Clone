import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function FoodScreen() {
	return (
		<SafeAreaView style={[tw``, styles.container]}>
			<Text>Still in Development</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {},
});
