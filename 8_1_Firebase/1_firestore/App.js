import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";

//Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyBl2mbAxVASoQ7jJdx9kcCRM-GM2avRmqE",
  authDomain: "coderlslab.firebaseapp.com",
  databaseURL: "https://coderlslab.firebaseio.com",
  projectId: "coderlslab",
  storageBucket: "coderlslab.appspot.com",
  messagingSenderId: "490304552202",
  appId: "1:490304552202:web:b6ad68334b53ce161fcef3",
};
// Zainicjuj Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Dodaj testową kolejcę
db.collection("cities")
  .add({
    name: "Tokyo",
    country: "Japan",
  })
  .then((docRef) => {
    console.log("Zapisano dokument: ", docRef.id);
  })
  .catch((error) => {
    console.error("Błąd zapisu: ", error);
  });

export default function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    // Obserwuj zmiany w danych
    var unsubscribe = db.collection("cities").onSnapshot((snapshot) => {
      let d = [];
      
      snapshot.forEach((doc) => {
        console.log(doc.data());
        d = [...d, doc.data()];
      });

      setData(d);
    });

    //Ważne po odmontowaniu komponentu przestać obserwować zmiany
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Zobacz jak działają dane na żywo</Text>
      <Text>
        Spróbuj dodać dane w panelu Firebase - zobacz co zmieniło się w twojej
        aplikacji
      </Text>
      <StatusBar style="auto" />
      <View>
        {data.map((x, i) => {
          return (
            <View key={i}>
              <Text>{x.name}</Text>
              <Text>{x.city}</Text>
            </View>
          );
        })}
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
