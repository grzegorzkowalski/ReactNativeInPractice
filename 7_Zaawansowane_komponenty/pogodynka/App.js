import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from "./screens/HomeScreen";
import CityWeatherScreen from "./screens/CityWeatherScreen";

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
              name="CityWeather"
              component={CityWeatherScreen}
              options={{
                tabBarLabel: 'CityWeather',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="contacts" color={color} size={26} />
                ),
              }}
          />
          <Tab.Screen
              name="FindWeather"
              component={FindWeatherScreen}
              options={{
                tabBarLabel: 'FindWeather',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="contacts" color={color} size={26} />
                ),
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


