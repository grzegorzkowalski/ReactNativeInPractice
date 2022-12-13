import React from 'react';
import {View, Button} from 'react-native';

const RandomNumber = ({setNumber}) => {

    const clickHandler = () => {
        const number = Math.ceil(Math.random() * 10+1);
        setNumber(number);
    }

    return (
        <View>
            <Button
                title="Losuj liczbę"
                color="magenta"
                onPress={clickHandler}
            />
        </View>
    );
};

export default RandomNumber;
