import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Name from "./components/Name";
import ColorBoxes from "./components/ColorBoxes";
import ShowDate from "./components/ShowDate";
import Map from "./components/Map";
import DataTimer from "./components/DataTimer";
import RandomNumberGenerator from "./components/RandomNumberGenerator";
import {useState} from "react";

export default function App() {
const [randomNumber, setRandomNumber] = useState(0);

 console.log("Witajcie studenci");

 const rand = () => {
     const randomNum = Math.random();
     if (randomNum >= 0.5) {
         console.log("Liczba większa lub równa 0.5");
     }
     else {
         console.log("Liczba mniejsza niż 0.5");
     }
     return randomNum;
 }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{rand()}</Text>
      <Name />
      <ColorBoxes />
      <ShowDate />
      <Map />
      <DataTimer />
      <RandomNumberGenerator updateApp={setRandomNumber}/>
      <Text>{randomNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
