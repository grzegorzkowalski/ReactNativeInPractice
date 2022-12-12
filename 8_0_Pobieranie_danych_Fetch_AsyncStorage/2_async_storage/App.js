import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const answers = ["papier", "nożyce", "kamień"];
  const [name, setName] = useState("No name"); //Dodaj stan początkowy na podstawie AsyncStorage
  const [gameHistory, setGameHistory] = useState([]); //Dodaj stan początkowy na podstawie AsyncStorage
  const [whoWon, setWhoWon] = useState('');

  const handleGame = () => {};

  return (
    <View style={styles.container}>
      <Text>Witaj {name}</Text>
      <TextInput style={{border: '1px solid black', 'margin': 30}} onChangeText={setName} value={name} />
      <Button title={"Zapisz imię do Storage"} onPress={() => {}} />
      <Text style={{margin: 10}}>GRA:</Text>
      <Button
        title={"papier"}
        onPress={() => {
          handleGame("papier");
        }}
      />
      <Button
        title={"nożyce"}
        onPress={() => {
          handleGame("nożyce");
        }}
      />
      <Button
        title={"kamień"}
        onPress={() => {
          handleGame("kamień");
        }}
      />
      <Text style={{margin: 10}}>Result: {} won</Text>
      <Text style={{margin: 10}}>Historia: </Text>
      <View>
        {
          gameHistory.map((x,i) => {
            return <Text key={i}>{x}</Text>
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
