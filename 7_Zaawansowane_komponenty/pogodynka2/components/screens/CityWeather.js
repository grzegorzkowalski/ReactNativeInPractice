import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CityWeather = ({navigation, route}) => {
    const [temp, setTemp] = useState(0);
    const APIkey = "5b2965ceb7056ac1cb87a3f4581e90b4";

    console.log(route.params);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${route.params.city}&appid=${APIkey}&units=metric`)
            .then(res => res.json())
            .then(res => setTemp(res.main.temp));
    }, []);

    return (
        <View style={styles.container}>
            <Text>{route.params.city}</Text>
            {temp && <Text>Temperatura: {temp}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }});

export default CityWeather;
