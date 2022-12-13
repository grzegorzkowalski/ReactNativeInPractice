import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const ContactScreen = ({navigation}) => {
    return (
        <View style={styles}>
            <Button onPress={() => navigation.navigate("Fun")} title="Contact" />
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

export default ContactScreen;
