import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
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

export default function App() {
  const [conversation, setConversations] = useState([]);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    // Obserwuj zmiany w danych
    var unsubscribe = db
      .collection("chat")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let d = [];

        snapshot.forEach((doc) => {
          console.log(doc.data());
          d = [...d, { ...doc.data(), id: doc.id }];
        });

        setConversations(d);
      });

    //Ważne po odmontowaniu komponentu przestać obserwować zmiany
    return () => {
      unsubscribe();
    };
  }, []);

  const handleChat = () => {
    db.collection("chat")
      .add({
        name: "Marcin",
        message: lastMessage,
        timestamp: new Date().getTime(),
      })
      .then(() => {
        setLastMessage("");
      });
  };

  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <Text>
        {item.name} | {item.message}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {
          conversation.map((el, ix) => {
            return <Text key={ix}>{el.name} | {el.message}</Text>
          })
        }
      </ScrollView> */}
      {conversation && conversation.length && (
        <FlatList
          data={conversation}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      <View>
        <TextInput
          style={styles.input}
          value={lastMessage}
          onChangeText={setLastMessage}
        />
        <Button
          title={"Wyślij"}
          onPress={() => {
            handleChat();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 50,
  },
  input: {
    margin: 10,
    padding: 20,
    flex: 1,
    width: 300,
  },
});
