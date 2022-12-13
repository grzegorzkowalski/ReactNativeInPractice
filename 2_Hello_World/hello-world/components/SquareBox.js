import React from 'react';
import {StyleSheet, View} from 'react-native';
import Box from "./Box";

const SquareBox = () => {
    return (
        <View style={style.box}>
            <Box color="red" />
            <Box color="green" />
            <Box color="blue" />
        </View>
    );
};

const style = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        borderWidth: 2,
        borderColor: "black"
    }
})

export default SquareBox;
