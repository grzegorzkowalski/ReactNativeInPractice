import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Witaj w grze</Text>
    /* TODO: Napisz swój kod tutaj */
      <Text style={styles.instructions}>Zaczynamy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 24,
    marginBottom: 54,
    textAlign: "center",
  },
  instructions: {
    textAlign: "center",
    color: "grey",
  },
});
