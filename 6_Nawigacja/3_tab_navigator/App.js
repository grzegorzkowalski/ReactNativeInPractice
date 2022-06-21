import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ContactScreen from "./screens/ContactScreen";
import WhatWeDoScreen from "./screens/WhatWeDoScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="About Us"
            component={AboutUsScreen}
            options={{
                tabBarLabel: 'AboutUs',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="contacts" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Contact"
            component={ContactScreen}
            options={{
                tabBarLabel: 'Contact',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="contacts" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="What we do"
            component={WhatWeDoScreen}
            options={{
                tabBarLabel: 'WhatWeDo',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="contacts" color={color} size={26} />
                ),
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


