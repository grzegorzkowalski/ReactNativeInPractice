import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
    const bigCities= [{key: "Warszawa"}, {key: "Poznań"}, {key: "Wrocław"}, {key: "Kraków"}];

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate("City")} title="Go to city list" />
            <Button onPress={() => navigation.navigate("Weather")} title="Go to weather info" />
            <FlatList
                data={bigCities}
                renderItem={({item}) => {
                    console.log(item);
                    return (
                        <View>
                            <Button
                                title={`Znajdz pogodę dla: ${item.key}`}
                                onPress={() => navigation.navigate("CityWeather", {city: item.key})}
                            />
                        </View>
                    )
                }}
            />
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

export default Home;
