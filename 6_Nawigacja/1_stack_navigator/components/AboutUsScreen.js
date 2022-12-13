import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";

const AboutUsScreen = ({navigation}) => {
    return (
        <View style={styles}>
            <Text>AboutUsScreen</Text>
            <Button onPress={() => navigation.navigate("Contact")} title="About" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AboutUsScreen;
