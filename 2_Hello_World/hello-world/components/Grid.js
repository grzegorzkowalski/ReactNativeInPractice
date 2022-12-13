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
        height: "80%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    innerContainerBlue: {
        flex: 1,
        height: "45%",
        width: "100%",
        backgroundColor: "blue",
        marginBottom: 10
    },
    innerContainerRed: {
        flex: 1,
        height: "45%",
        width: "100%",
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    innerInnerContainer: {
        width: "40%",
        height: "45%",
        backgroundColor: "yellow"
    }
})

export default Grid;
