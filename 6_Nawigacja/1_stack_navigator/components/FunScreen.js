import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const FunScreen = ({navigation}) => {
    return (
        <View style={{styles}}>
            <Text>FunScreen</Text>
            <Button onPress={() => navigation.navigate("Home")} title="About" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FunScreen;
