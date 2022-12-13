import React from 'react';
import {Text} from "react-native";

const Invitation = ({inviteData}) => {
    const {date, time, place, dressCode} = inviteData;
    return (
        <Text>
            {`Mam przyjemność zaprosić Pana na imprezę w ${place} czas ${date} ${time}. Stroj obowiazujacy to ${dressCode}.`}
        </Text>
    );
};

export default Invitation;
