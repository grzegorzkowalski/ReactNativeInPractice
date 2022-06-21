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
import capitalLangLong from "./data/capitalLangLong";

// const API_Key = "wstaw tu swój klucz API";
const API_Key = "632b95e80b7ceba4c48c0a574ef5acf4";

const API_URL = `http://api.countrylayer.com/v2/all?access_key=${API_Key}`;

export default function App() {
  const [countries, setCountries] = useState([]);

  function findIndex(capital) {
    return capitalLangLong.findIndex((el) => el.CapitalName === capital);
  }

  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    console.log(lat1,lon1,lat2,lon2)
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

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
        <Text style={styles.title}>{item.capital}</Text>
        <Image
            source={`https://www.worldometers.info/img/flags/${(item.alpha2Code).toLowerCase()}-flag.gif`}
            style={{width: 45, height:30}}
        />
        <Text>Nazwa w języku kraju</Text>
        <View>
          {
            item.altSpellings.map(el => <Text>{el}</Text>)
          }
        </View>
        <Text>
          `Odległość z Warszawy do ${item.capital}:
          ${getDistanceFromLatLonInKm(
            52.242526379634235,
            21.068054831680122,
            capitalLangLong[findIndex(item.capital)]?.CapitalLatitude,
            capitalLangLong[findIndex(item.capital)]?.CapitalLongitude
        )}`
        </Text>
      </View>
  );

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}></View>
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
}

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
    height: 250,
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
