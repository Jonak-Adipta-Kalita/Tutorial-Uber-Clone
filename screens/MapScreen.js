import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function MapScreen() {
	return (
		<SafeAreaView style={[tw``, styles.container]}></SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {},
});
