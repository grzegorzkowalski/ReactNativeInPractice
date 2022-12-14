import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {getWeather, testAsync} from "../../api";

const CityWeather = ({route, navigation}) => {
    const [weather, setWeather] = useState(false);
    const [background, setBackground] = useState({uri: "https://img.freepik.com/premium-photo/smooth-empty-grey-studio-well-use-as-background_1258-3149.jpg?w=2000"});

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        background: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: "20px",
            width: "100%",
            height: "100%"
        }
    });

    useEffect(() => {
        getWeather(route.params.city, setWeather);
    }, []);

    useEffect(() => {
        if(weather) {
            console.log(weather);
            testAsync(weather.weather[0].description, setBackground);
        }
    }, [weather]);

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.background}>
                {route.params.city && <Text>{route.params.city}</Text>}
                {weather && <Text>Temperatura: {weather.main.temp}</Text>}
                {weather && <Text>Opis pogody: {weather.weather[0].description}</Text>}
            </ImageBackground>
        </View>
    );
};

export default CityWeather;
