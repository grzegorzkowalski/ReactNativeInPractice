import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Witaj w grze</Text>
      <Pressable onPress={() => navigation.navigate('Game')}>
          <Text style={styles.instructions}>Zaczynamy</Text>
      </Pressable>
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
