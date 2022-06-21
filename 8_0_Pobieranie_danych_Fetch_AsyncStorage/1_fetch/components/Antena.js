import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Antena = ({ navigation, route }) => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://miniramowka.polskieradio.pl/Schedule/GetByDate?Id=${route.params.antena}&Date=2021-05-18`
        );
        const data = await response.json();
        console.log(data.Data.Schedule);
        setPrograms(data.Data.Schedule);
      } catch (error) {
        console.error("Błąd");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const save = await AsyncStorage.setItem(
          "@last_antena",
          String(route.params.antena)
        );
        console.log(save);
      } catch (error) {}
    })();
  }, [route.params.antena]);

  return (
    <View>
      <Text>Antena: {route.params.antena} </Text>
      {programs.map((el, index) => {
        return <Text key={index}>{el.Title}</Text>;
      })}
    </View>
  );
};

export default Antena;
