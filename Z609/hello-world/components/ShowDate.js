import React, {useState, useEffect} from 'react';

import {Text} from 'react-native';

const ShowDate = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleDateString())
    },[]);

    return (
        <Text>
            {date}
        </Text>
    );
};

export default ShowDate;
