import React from 'react'
import {View} from "react-native";
import Square from "./Square";

const SquareBox = () => {
    return (
        <View>
            <Square color="red" />
            <Square color="black" />
            <Square color="blue" />
        </View>
    );
};

export default SquareBox;