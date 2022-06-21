import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import Timer from "./Zadanie8/Timer";
import Name from "./Zadanie1/Name";
import Surname from "./Zadanie1/Surname";
import Calendar from "./Zadanie3/Calendar";
import Pizza from "./Zadanie6/Pizza";
import Invitation from "./Zadanie7/Invitation";

export default function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [randonNumber, setRandomNumber] = useState(0);
    const inviteData = {
        place: "domowka",
        date: "sobota",
        time: "16",
        dressCode: "brak"
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

   useEffect(() => {
       setInterval(() => {
           setTime(new Date().toLocaleTimeString())
       }, 1000);
   }, []);
    return (
        <View style={styles.container}>
            {/*<Name />*/}
            {/*<Surname />*/}
            {/*<Calendar/>*/}
            {/*<Map url={"https://bliskopolski.pl/pliki/mapa-polski-1701.png"}/>*/}
            {/*<SquareBox/>*/}
            {/*<Grid/>*/}
            {/*<Pizza/>*/}
            {/*<Invitation inviteData={inviteData}/>*/}
            <Timer time={time}/>
            <Text>{randonNumber}</Text>
            <Button
                title="Losuj"
                onPress={() => setRandomNumber(getRandomInt(1,10))}
            />
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
