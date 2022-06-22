import { View, Button, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {addAnswer} from "../redux/actions";

const Intro = ({ navigation }) => {
  const result = useSelector((state) => state.result.result);
  const dispatch = useDispatch();
  return (
    <View style={styles.home}>
      <Image style={styles.img} source={require("../assets/quiz.jpg")} />
      <Text style={styles.text}>Kowal Quiz</Text>
      <Text style={styles.text}>Aktualny wynik: {result}</Text>
      <View style={styles.buttons}>
        <Button
          title="Przejdź do Quizz'u"
          onPress={() => {
            // @ts-ignore
            navigation.navigate("Home", {
              itemId: 87,
            });
          }}
        />
        <Button
            title="Dispatch action"
            onPress={() => dispatch(addAnswer(5))}
        />
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
    marginBottom: 60,
  },
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    maxWidth: 300,
  },
  text: {
    margin: 20,
    color: "blue",
    fontSize: 32
  }
});
