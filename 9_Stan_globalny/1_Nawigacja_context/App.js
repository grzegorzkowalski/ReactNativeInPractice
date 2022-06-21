import React from 'react';
import { Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/screens/HomeScreen";
import AboutUsScreen from "./components/screens/AboutUsScreen";
import ContactScreen from "./components/screens/ContactScreen";
import FunScreen from "./components/screens/FunScreen";

const Stack = new createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={ HomeScreen }
              options={{
                  headerStyle: {
                      backgroundColor: '#21094e'
                  },
                  headerTintColor: '#ec1d23',
                  headerRight: () => <Image
                      source={"https://bi.im-g.pl/ldpic/participant/8673/logo/teamlogo_s1_26301.png"}
                      style={{width: 50, height: 50} }
                  />
              }}
          />
          <Stack.Screen name="About" component={ AboutUsScreen } />
          <Stack.Screen name="Contact" component={ ContactScreen } />
          <Stack.Screen name="Fun" component={ FunScreen } />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

