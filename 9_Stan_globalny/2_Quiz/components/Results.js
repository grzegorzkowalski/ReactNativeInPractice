import * as React from "react";
import { StyleSheet } from "react-native";
import questions from "../data/questions.json";
import { Text, View, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function Results({ route }) {
  const isFocused = useIsFocused();

  if (!route?.params?.answers) {
    <View>
      <Text>Najpierw odpowiedź na pytania</Text>
    </View>;
  }

  const results = questions.questions.map((x, i) => {
    return x["goodAnswer"] === route?.params?.answers[x["questionNumber"]]
      ? 1
      : 0;
  });

  const points = results.reduce((a, b) => a + b);

  console.log("Results", results);

  return (
    <View style={styles.container}>
      <Text>
        Twój wynik: {points} / {results.length}
      </Text>

      {(() => {
        switch (true) {
          case points < questions.questions.length / 3:
            return (
              <>
                <Text>Spróbuj jeszcze raz</Text>
                <Image
                  style={styles.image}
                  source={require("../assets/sad.png")}
                />
              </>
            );
          case points < (questions.questions.length / 3) * 2:
            return (
              <>
                <Text>Może być</Text>
                <Image
                  style={styles.image}
                  source={require("../assets/stable.jpeg")}
                />
              </>
            );
          case points <= questions.questions.length:
            return (
              <>
                <Text>Świetny wynik</Text>
                <Image
                  style={styles.image}
                  source={require("../assets/happy.jpg")}
                />
              </>
            );
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
