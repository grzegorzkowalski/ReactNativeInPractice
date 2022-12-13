import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AboutUs from "./AboutUs";
import AboutOurCompany from "./AboutOurCompany";

const About = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="AboutUS" component={AboutUs} />
            <Tab.Screen name="AboutOurCompany" component={AboutOurCompany} />
        </Tab.Navigator>
    );
};

export default About;
