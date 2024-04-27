import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from "react-native";
import Name from "../components/Name";
import ColorBoxes from "../components/ColorBoxes";
import ShowDate from "../components/ShowDate";
import Map from "../components/Map";
import DataTimer from "../components/DataTimer";
import RandomNumberGenerator from "../components/RandomNumberGenerator";

const HomePage = ({route, navigation}) => {
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
            <Button title="Contact" onPress={() => navigation.navigate("Contact", {id: 76, update: randomNumber})} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
});



export default HomePage;
