import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation, route }) => {

  const getLastAntenaFromStorage = async () => {
    try {
      const antena = await AsyncStorage.getItem("@last_antena");
      const antenaNumber = Number(antena);
      if (!isNaN(antenaNumber) && antenaNumber) {
        return antenaNumber;
      }
      return 1;
    } catch (error) {
      console.log(error);
      return 1;
    }
  };

  return (
    <View>
      <Text>Home</Text>
      <Button
        title={"Jedynka"}
        onPress={() => navigation.navigate("Antena", { antena: 1 })}
      ></Button>
      <Button
        title={"Dwójka"}
        onPress={() => navigation.navigate("Antena", { antena: 2 })}
      ></Button>
      <Button
        title={"Trójka"}
        onPress={() => navigation.navigate("Antena", { antena: 3 })}
      ></Button>
      <Button
        title={"Czwórka"}
        onPress={() => navigation.navigate("Antena", { antena: 4 })}
      ></Button>
      <Button
        title={"Ostatnio słuchana"}
        onPress={async () => {
          const last = await getLastAntenaFromStorage();
          navigation.navigate("Antena", {
            antena: last /* wartość z assync storage */,
          });
        }}
      ></Button>
    </View>
  );
};

export default Home;
