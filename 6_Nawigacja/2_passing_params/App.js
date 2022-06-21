import "react-native-gesture-handler";
import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Author from "./components/SingleAuthor";
import Authors from "./components/Authors";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Drawers")}
        title="Go to notifications"
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode={"modal"}>
        <Stack.Screen name="Home" component={Authors} />
        <Stack.Screen name="Author" component={Author} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
