import React, {useState}  from 'react';
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ThemeContext from "./context/ThemeContext";
import HomeScreen from "./components/screens/HomeScreen";
import AboutUsScreen from "./components/screens/AboutUsScreen";
import ContactScreen from "./components/screens/ContactScreen";
import FunScreen from "./components/screens/FunScreen";

const Stack = new createStackNavigator();

export default function App() {
  const [style, setStyle] = useState({
      headerStyle: '#21094e',
      headerTintColor: '#ec1d23'
  });
  return (
      <ThemeContext.Provider value={{
          style,
          updateContext: (value) => {setStyle(value)}
      }}>
          <ThemeContext.Consumer>
          { context => (
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen
                      name="Home"
                      component={ HomeScreen }
                      options={{
                          headerStyle: {
                              backgroundColor: context.style.headerStyle
                          },
                          headerTintColor: context.style.headerTintColor,
                          headerRight: () => { return ( <Image
                                  source={"https://bi.im-g.pl/ldpic/participant/8673/logo/teamlogo_s1_26301.png"}
                                  style={{width: 50, height: 50}}
                              />
                          )}
                      }}
                  />
                  <Stack.Screen
                      name="About"
                      component={ AboutUsScreen }
                      options={{
                          headerStyle: {
                              backgroundColor: context.style.headerStyle
                          },
                          headerTintColor: context.style.headerTintColor
                      }}
                  />
                  <Stack.Screen name="Contact" component={ ContactScreen } />
                  <Stack.Screen name="Fun" component={ FunScreen } />
                </Stack.Navigator>
              </NavigationContainer>
          )}
          </ThemeContext.Consumer>
      </ThemeContext.Provider>
  );
}

