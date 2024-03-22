import React from 'react';

import {Image, View} from 'react-native';

const Map = () => {
    const mapUrl = "https://www.pastelowelove.pl/environment/cache/images/1100_1100_productGfx_4234/mapa-polski-szara--naklejka.-naklejka-dla-dzieci.-dekoracje-pokoju.webp"
    return (
        <View>
            <Image
                source={{uri: mapUrl}}
                style={{width: 200, height: 200}}
            />
        </View>
    );
};

export default Map;
