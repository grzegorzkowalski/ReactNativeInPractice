import React from 'react';
import {Button} from 'react-native';

const RandomNumberGenerator = ({updateApp}) => {
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    const update = () => {
        if (typeof updateApp === "function") {
            const rnd = generateRandomNumber(1,10);
            updateApp(rnd);
        }
    }
    return (
        <Button title="update App" onPress={update} />
    );
};

export default RandomNumberGenerator;
