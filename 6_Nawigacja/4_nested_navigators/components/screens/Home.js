import React from 'react';
import {Text, View, Button} from 'react-native';

const Home = ({route, navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate("About")} title="Go to About" />
        </View>
    );
};

export default Home;
