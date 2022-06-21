import React from 'react';
import {Text} from "react-native";

const Calendar = () => {
    const time = new Date().toLocaleDateString();
    return <Text>{time}</Text>
};

export default Calendar;