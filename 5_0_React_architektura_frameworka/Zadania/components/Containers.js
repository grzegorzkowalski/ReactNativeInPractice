import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

const Containers = () => {


    useEffect(() => {
        console.log(StyleSheet.flatten(test));
    }, []);
    return (
        <View style={test.container}>
            <View style={test.blueContainer} />
            <View style={test.redContainer}>
                <View style={[test.yellowContainer, test.firstYellow]} />
                <View style={test.yellowContainer} />
            </View>
        </View>
    );
};

const test = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    blueContainer: {
        width: "90%",
        height: "45%",
        marginBottom: 10,
        backgroundColor: "blue"
    },
    redContainer: {
        width: "90%",
        height: "45%",
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row",
        flexWrap: "no-wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    yellowContainer: {
        width: "45%",
        height: "50%",
        backgroundColor: "yellow"
    },
    firstYellow: {
        marginRight: 10
    }
});

export default Containers;
