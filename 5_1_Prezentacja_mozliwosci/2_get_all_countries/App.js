import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

const API_Key = "wstaw tu swój klucz API";

const API_URL = `http://api.countrylayer.com/v2/all?access_key=${API_Key}`;

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(API_URL);
        const data = await request.json();
        setCountries(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Image
          source={`https://www.worldometers.info/img/flags/${(item.alpha2Code).toLowerCase()}-flag.gif`}
          style={{width: 45, height:30}}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar} />
      <StatusBar />
      {!countries.length ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={countries}
          renderItem={renderItem}
          keyExtractor={(item) => item.alpha2Code}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#36213E",
  },
  item: {
    flexDirection: "column",
    height: 52,
    backgroundColor: "#36213E",
    color: 'white',
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,

  },
  title: {
    color: '#B8F3FF'
  },
  topBar: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row",
    backgroundColor: "#8AC6D0",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
