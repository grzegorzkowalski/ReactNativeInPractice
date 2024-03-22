import React from 'react';

import {View, StyleSheet} from 'react-native';

const Layout = () => {
    return (
        <View style={styles.box}>
            <View style={styles.blueBox} />
            <View style={styles.redBox}>
                <View style={styles.yellowBox} />
                <View style={styles.yellowBox} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        margin: 10,
        height: 500,
        width: "100%"
    },
    blueBox: {
        flex: 1,
        width: "100%",
        height: "50%",
        backgroundColor: "blue"
    },
    redBox: {
        flex: 1,
        width: "100%",
        height: "50%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "red"
    },
    yellowBox: {
        width: "40%",
        height: "90%",
        backgroundColor: "yellow"
    }
})

export default Layout;
