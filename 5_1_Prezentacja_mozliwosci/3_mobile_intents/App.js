import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Vibrations from "./screens/Vibrations";
import Camera from "./screens/Camera";
import Location from "./screens/Location";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vibrations" component={Vibrations} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
