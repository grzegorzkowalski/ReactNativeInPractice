import React, {useContext} from 'react';
import { Button, Text, View } from 'react-native';
import ThemeContext from "../../context/ThemeContext";


const AboutUsScreen = ({}) => {
    const {style, updateContext} = useContext(ThemeContext);
    return (
        <View>
            <Text>
                AboutUsScreen
            </Text>
            <Button
                title="Update Context"
                onPress={() => updateContext({
                    headerStyle: 'yellow',
                    headerTintColor: 'green'
                })}
            />

        </View>

    );
};

export default AboutUsScreen;
