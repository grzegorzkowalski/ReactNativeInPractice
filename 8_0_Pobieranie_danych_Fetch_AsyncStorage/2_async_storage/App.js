import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const answers = ["papier", "nożyce", "kamień"];
  const [name, setName] = useState(""); //Dodaj stan początkowy na podstawie AsyncStorage
  const [gameHistory, setGameHistory] = useState([]); //Dodaj stan początkowy na podstawie AsyncStorage
  const [whoWon, setWhoWon] = useState('');

  const handleGame = () => {};

  const getName = async (addName) => {
        try {
            const storageName = await AsyncStorage.getItem("name");
            if (storageName) {
                addName(storageName);
            }
            else {
                addName("No name in storage");
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    const setNameToStorage = async (name, setName) => {
      try {
          await AsyncStorage.setItem("storageName", name);
          console.log(getName(setName));
      }
      catch(e) {
          console.log(e);
      }
    }

    useEffect(() => {
        const addName = async (addName) => {
            const value = await getName(addName);
            console.log(value, "value");
            setName(value);
        }
        addName(setName);
    }, []);


  return (
    <View style={styles.container}>
      <Text>Witaj {name}</Text>
      <TextInput style={{border: '1px solid black', 'margin': 30}} onChangeText={setName} value={name} />
      <Button title={"Zapisz imię do Storage"} onPress={() => setNameToStorage(name)} />
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
