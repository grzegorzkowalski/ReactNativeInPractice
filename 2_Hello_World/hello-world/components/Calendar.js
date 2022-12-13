import React from 'react';
import {View, Text} from 'react-native';

const Calendar = () => {
    return (
        <View>
            <Text>{new Date().toLocaleDateString()}</Text>
        </View>
    );
};

export default Calendar;
