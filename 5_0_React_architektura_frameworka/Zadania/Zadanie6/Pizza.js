import React from 'react';
import {Text, StyleSheet} from "react-native";
const Pizza = () => {
    return (
        <Text>
            "<Text style={styles.italic}>Pizza</Text> to bardzo smaczne włoskie danie.
            Robi się ją z <Text style={styles.bold}>ciasta drożdżowego</Text>.
            Na ciasto wylewa się <Text style={styles.bold}>sos pomidorowy</Text>.
            Na niego układa się składniki : <Text style={styles.bold}>kiełbasę, ser żółty, oliwki, paprykę.</Text>
            Jest wiele rodzajów <Text style={styles.italic}>pizzy</Text>,
            może być z mięsem, bez mięsa, rybna,na słodko z <Text style={styles.ananas}>ananasem</Text>."
        </Text>
    );
};

const styles = StyleSheet.create({
    italic: {
        fontStyle: "italic"
    },
    bold: {
        fontWeight: "bold"
    },
    ananas: {
        color: "yellow"
    }
})

export default Pizza;