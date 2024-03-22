import React from 'react';

import {Text, StyleSheet} from 'react-native';

const Pizza = () => {
    const pizza = <Text style={styles.italic}>Pizza</Text>;
    return (
        <Text>
            {pizza} to bardzo smaczne włoskie danie.
            Robi się ją z ciasta drożdżowego.
            Na ciasto wylewa się sos pomidorowy. Na niego układa się składniki:
            <Text style={styles.bold}>kiełbasę, ser żółty, oliwki, paprykę.</Text>
            Jest wiele rodzajów pizzy, może być z mięsem, bez mięsa, rybna, na słodko z
            <Text style={styles.yellow}> ananasem</Text>.
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
    yellow: {
        color: "yellow"
    }
})

export default Pizza;
