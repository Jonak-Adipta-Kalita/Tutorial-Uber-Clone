import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import FoodScreen from "./screens/FoodScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar style="auto" />
			<SafeAreaProvider>	
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MapScreen"
							component={MapScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="FoodScreen"
							component={FoodScreen}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {},
});
