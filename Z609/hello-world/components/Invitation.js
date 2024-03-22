import React from 'react';

import {Text} from 'react-native';

const Invitation = ({inviteData: {day, hours, place, dressCode}}) => {
    return (
        <Text>
            W dniu {day} o godzinie {hours} zapraszam
            na przyjęcie urodzinowe mojego kota Wilhelma.
            Przyjęcie odbędzie się w {place}.
            Stój {dressCode} obowiązkowy.
        </Text>
    );
};

export default Invitation;
