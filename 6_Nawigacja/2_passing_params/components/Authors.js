import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Button,
} from "react-native";

const API_URL = "https://goquotes-api.herokuapp.com/api/v1/all/authors";

export default function App({navigation, route}) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(API_URL);
        const data = await request.json();
        setAuthors(data.authors);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}></View>
      <StatusBar />
      {!authors.length ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={authors}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    padding: 15
  },
});
