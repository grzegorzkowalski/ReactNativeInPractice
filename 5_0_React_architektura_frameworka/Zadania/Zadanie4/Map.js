import React from 'react';
import {Image} from "react-native";

const Map = ({url}) => {
    return (
        <Image
            source={url}
            style={{width: 400, height: 700}}
        />
    );
};

export default Map;