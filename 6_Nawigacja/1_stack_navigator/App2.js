import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import AboutUsScreen from "./components/AboutUsScreen";
import ContactScreen from "./components/ContactScreen";
import FunScreen from "./components/FunScreen";

export default function App() {
    const Stack = createNativeStackNavigator();
    const headerOptions = {
        headerTintColor: '#21094e',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: () => (
            <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Legia_Warsaw_logo.svg/180px-Legia_Warsaw_logo.svg.png"
                alt="Legia"
                style={{width: "50px", height:"50px"}}
            />
        ),
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{...headerOptions, title: 'My home'}} />
                <Stack.Screen name="About" component={AboutUsScreen} options={headerOptions} />
                <Stack.Screen name="Contact" component={ContactScreen} options={headerOptions} />
                <Stack.Screen name="Fun" component={FunScreen} options={headerOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



