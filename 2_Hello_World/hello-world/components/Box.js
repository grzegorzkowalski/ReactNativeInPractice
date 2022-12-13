import React from 'react';
import {View} from 'react-native';

const Box = ({color}) => {
    return (
        <View style={{width: "30%", height: "30%", backgroundColor: color}} />
    );
};

export default Box;
