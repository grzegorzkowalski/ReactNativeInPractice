import {useState, useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    ImageBackground,
    StyleSheet,
    Button
} from 'react-native';
import {getWeather, testAsync} from "../../api";

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

const FindWeather = ({route}) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [weather, setWeather] = useState(false);
    const [background, setBackground] = useState({uri: "https://img.freepik.com/premium-photo/smooth-empty-grey-studio-well-use-as-background_1258-3149.jpg?w=2000"});

    const clickHandler = () => {
        if (searchPhrase.length > 2) {
            getWeather(searchPhrase, setWeather);
        }
    }

    useEffect(() => {
        if (weather) {
            testAsync(weather.weather[0].description, setBackground);
        }
    }, [weather]);


    return (
        <View style={styles.container}>
            <Text>Wpisz miasto</Text>
            <TextInput
                style={{borderColor: "black", borderWidth: 2}}
                onChangeText={newText => setSearchPhrase(newText)}
                defaultValue={searchPhrase}
            />
            <Button
                onPress={clickHandler}
                title="Wyszukaj pogodę"
            />
            {
                weather &&
                <ImageBackground source={background} resizeMode="cover" style={styles.background}>
                    {searchPhrase && <Text>{searchPhrase}</Text>}
                    {<Text>Temperatura: {weather.main.temp}</Text>}
                    {<Text>Temperatura: {weather.weather[0].description}</Text>}
                </ImageBackground>
            }
        </View>
    );
};

export default FindWeather;
