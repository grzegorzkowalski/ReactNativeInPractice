import React from "react";
import {Text, View, StyleSheet} from "react-native-web";


const Name = () => {
    return (
        <View style={style.main}>
            <Text>Grzegorz</Text>
        </View>
    );
};

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "red",
        margin: 10,
        justifyContent: "center",
        textAlign: "center",
        width: "80%"
    }

})

export default Name;
