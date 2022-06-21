import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";

const API_URL = "https://goquotes-api.herokuapp.com/api/v1/all";

export default function Author({ navigation, route }) {
  const [quotes, setQuotes] = useState(false);
  const { author } = route.params;

  useEffect(() => {
    (async () => {
      try {
        // let author = "Anonymous";
        const request = await fetch(`${API_URL}?type=author&val=${author}`);
        const data = await request.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!quotes) {
    return <Text>Nic tu nie ma</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {quotes.map((x, i) => {
          return (
            <View key={i}>
              <Text>{x.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
