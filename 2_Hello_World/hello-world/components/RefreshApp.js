import React from 'react';
import {View, Text, Button} from 'react-native';

const RefreshApp = ({counter, setCounter}) => {
    const clickHandler = () => {
        if (typeof setCounter === "function") {
            setCounter(prev => prev + 1);
        }
    }
    return (
        <View>
            <Text>{counter}</Text>
            <Button
                title="Kliknij mnie"
                onPress={clickHandler}
            />
        </View>
    );
};

export default RefreshApp;
