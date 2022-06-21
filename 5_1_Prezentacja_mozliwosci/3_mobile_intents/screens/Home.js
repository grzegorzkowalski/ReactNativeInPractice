import { View, Text, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Vibrations"
        onPress={() => navigation.navigate("Vibrations")}
      />
      <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
      <Button
        title="Location"
        onPress={() => navigation.navigate("Location")}
      />
    </View>
  );
};

export default Home;
