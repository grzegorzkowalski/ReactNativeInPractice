import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Contact" component={ContactPage} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

