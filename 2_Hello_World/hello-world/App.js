import {useState, useEffect} from "react";
import { StyleSheet, View, Text } from 'react-native';
import Invitation from "./components/Invitation";
import Timer from "./components/Timer";
import RefreshApp from "./components/RefreshApp";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [counter, setCounter] = useState(0);

  const objForInvitation = {
    date: "14.12.2022",
    time: "19:00",
    place: "tajne miejsce",
    dressCode: "elegancki"
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <View style={styles.container}>
      <Invitation inviteData={objForInvitation} />
      <Timer time={time} />
      <RefreshApp counter={counter} setCounter={setCounter} />
    </View>
  );
}
