import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './components/Home'
import ResultsScreen from './components/Results'
import IntroScreen from './components/IntroScreen'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
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
