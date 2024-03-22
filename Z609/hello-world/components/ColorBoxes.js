import React from 'react';

import {StyleSheet, View} from 'react-native';

const ColorBoxes = () => {
    return (
        <View>
            <View style={[style.box, {backgroundColor: "red"}]}/>
            <View style={[style.box, style.green]}/>
            <View style={[style.box, style.blue]}/>
        </View>
    );
};

const style = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        margin: 10
    },
    green: {
        backgroundColor: "green"
    },
    blue: {
        backgroundColor: "blue"
    }
});

export default ColorBoxes;
