import React from "react";
import { Text, View, StyleSheet, Button, ScrollView, SafeAreaView } from "react-native";
import { RadioButton } from "react-native-paper";
import questions from "../data/questions.json";
import reduce from "lodash/reduce";
import { useNavigation } from "@react-navigation/native";

const initialAnswers = reduce(
      questions.questions,
      (r, v) => {
        return { ...r, [v.questionNumber]: "" };
      },
      {}
    )

const Quiz = ({}) => {
  const navigation = useNavigation();
  const [answers, setAnswers] = React.useState(
      initialAnswers
  );

  console.log("Answers", answers);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quiz wiedzy ogólnej</Text>
      <ScrollView style={styles.scrollview}>
        {questions?.questions?.map((x, i) => {
          return (
            <View key={i}>
              <Text style={styles.question}>
                {x.questionNumber}. {x.question}
              </Text>
              <View>
                {Object.values(x?.answers)?.map((y, j) => {
                  return (
                    <View key={j} style={styles.answers}>
                      <RadioButton
                        key={j}
                        value={y}
                        status={
                          answers[x.questionNumber] === y
                            ? "checked"
                            : "unchecked"
                        }
                        onPress={() =>
                          setAnswers({ ...answers, [x.questionNumber]: y })
                        }
                      />
                      <Text>{y}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Button
        title="Przejdź do wyników"
        disabled={Object.values(answers).some((x) => !x)}
        onPress={() => {
          // @ts-ignore
          navigation.navigate("Results", {
            itemId: 86,
            answers: answers,
          });
        }}
      />
      <View style={styles.scrollview}></View>

      <Button
        title="Resetuj Quiz"
        onPress={() => {
          setAnswers(initialAnswers)
        }}
      />

    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  scrollview: {
    paddingBottom: 20,
  },
  question: {
    marginBottom: 10,
  },
  answers: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
