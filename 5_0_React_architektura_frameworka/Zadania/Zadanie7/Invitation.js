import React from 'react';
import {Text} from "react-native";

const Invitation = ({inviteData}) => {
    const {date, time, place, dressCode} = inviteData;
    return (
        <Text>
            {`Mam przyjemnosc zaprosic Pana na impreze w ${place} czas ${date} ${time}. Stroj obowiazujacy to ${dressCode}.`}
        </Text>
    );
};

export default Invitation;