import React, { useContext } from 'react';
import ThemeContext from "../../context/ThemeContext";

import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    const {updateContext} = useContext(ThemeContext);
    return (
        <View style={styles.container}>
          <Text>Home</Text>
          <Button title="About Us" onPress={() => navigation.navigate('About')} />
          <Button
              title="Update Context"
              onPress={() => updateContext({
                  headerStyle: 'red',
                  headerTintColor: 'black'
              })}
          />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
