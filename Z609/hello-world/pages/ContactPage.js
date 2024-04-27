import React from 'react';
import {View, Text, Button} from "react-native";

const ContactPage = ({route, navigation}) => {
    console.log(route.params);
    const {id, update} = route.params;
    console.log(id, update);
    return (
        <View>
            <Text>Contact Page</Text>
            <Text>User id = {id}</Text>
            <Button title="Home navigate" onPress={() => navigation.navigate("Home")} />
            <Button title="Home push" onPress={() => navigation.push("Home")} />
        </View>
    );
};

export default ContactPage;
