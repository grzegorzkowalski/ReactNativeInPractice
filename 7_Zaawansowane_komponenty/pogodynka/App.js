import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./components/screens/Home";
import FindWeather from "./components/screens/FindWeather";
import CityWeather from "./components/screens/CityWeather";

export default function App() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
          <Tab.Navigator initialParams={{apikey: "test"}}>
              <Tab.Screen
                  name="Home"
                  component={Home}
                  options={{
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="home" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="CityWeather"
                  component={CityWeather}
                  options={({ route }) => ({
                      title: route.params?.city || "CityWeather",
                      tabBarLabel: 'Weather',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="weather-sunny" color={color} size={size} />
                      ),
                  })}
              />
              <Tab.Screen
                  name="FindWeather"
                  component={FindWeather}
                  options={{
                      tabBarLabel: 'Search',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="feature-search" color={color} size={size} />
                      ),
                  }}
              />
          </Tab.Navigator>
      </NavigationContainer>
  )
};
