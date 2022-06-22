import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import HomeScreen from './components/Home';
import ResultsScreen from './components/Results';
import IntroScreen from './components/IntroScreen';
import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Intro" component={IntroScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Results" component={ResultsScreen} />
          </Stack.Navigator>
          <StatusBar />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
