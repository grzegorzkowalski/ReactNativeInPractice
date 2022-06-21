import React from 'react';
import {StyleSheet, View} from "react-native";

const Grid = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainerBlue}/>
            <View style={styles.innerContainerRed}>
                <View style={[styles.innerInnerContainer, {marginRight: 20}]}/>
                <View style={styles.innerInnerContainer}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    innerContainerBlue: {
        flex: 1,
        height: 200,
        width: 800,
        backgroundColor: "blue",
        marginBottom: 10
    },
    innerContainerRed: {
        flex: 1,
        height: 200,
        width: 800,
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    innerInnerContainer: {
        width: "40%",
        height: 300,
        backgroundColor: "yellow"
    }
})

export default Grid;