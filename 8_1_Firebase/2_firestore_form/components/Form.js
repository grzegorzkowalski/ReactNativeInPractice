import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Switch,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import db from "../firebaseConfig";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [kierunek, setKierunek] = useState("matematyka");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const toggleSwitch = () => setIsConfirmed((previousState) => !previousState);
  const [errors, setErrors] = useState([]);

  const handleForm = () => {
    let valid = true;
    const err = [];

    console.log(isConfirmed);

    if (!name) {
      err.push("Wpisz imię ");
      valid = false;
    }

    if (!surname) {
      err.push("Wpisz nazwisko ");
      valid = false;
    }

    if (!phone) {
      err.push("Wpisz telefon ");
      valid = false;
    }

    if (email.indexOf("@") == -1) {
      err.push("Wpisz email ");
      valid = false;
    }

    if (!isConfirmed) {
      err.push("Wyraź zgodę ");
      valid = false;
    }

    if (valid) {
      //jakaś funkcja do wysłania do Firebase

      db.collection("candidates")
        .add({
          name,
          surname,
          phone,
          email,
          kierunek,
          isConfirmed,
        })
        .then((x) => {
          console.log("Dane zapisane", x.id);
        })
        .catch((error) => {
          console.error("Błąd");
        });

      setErrors([]);
    } else {
      setErrors(err);
    }
  };

  return (
    <View>
      <View style={style.container}>
        <Text>Wprowadź imię</Text>
        <TextInput
          style={style.input}
          onChangeText={setName}
          value={name}
        ></TextInput>
      </View>
      <View style={style.container}>
        <Text>Wprowadź nazwisko</Text>
        <TextInput
          style={style.input}
          onChangeText={setSurname}
          value={surname}
        ></TextInput>
      </View>
      <View style={style.container}>
        <Text>Wprowadź email</Text>
        <TextInput
          style={style.input}
          onChangeText={setEmail}
          value={email}
        ></TextInput>
      </View>
      <View style={style.container}>
        <Text>Wprowadź telefon</Text>
        <TextInput
          style={style.input}
          onChangeText={setPhone}
          value={phone}
        ></TextInput>
      </View>
      <View style={style.container}>
        <Picker
          selectedValue={kierunek}
          onValueChange={(itemValue, itemIndex) => setKierunek(itemValue)}
        >
          <Picker.Item label="matematyka" value="matematyka" />
          <Picker.Item label="fizyka" value="fizyka" />
          <Picker.Item label="informatyka" value="informatyka" />
        </Picker>
      </View>
      <View style={style.container}>
        <Text>Zgoda na przetwarzanie danych</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isConfirmed ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isConfirmed}
        />
      </View>
      <View style={style.container}>
        <Button title={"Wyślij"} onPress={() => handleForm()}></Button>
      </View>
      <View style={style.container}>
        {errors.map((x, i) => {
          return (
            <Text key={i} style={{ color: "red" }}>
              {x}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default Form;

const style = StyleSheet.create({
  input: {
    border: "1px solid black",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
