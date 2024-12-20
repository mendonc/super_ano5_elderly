import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Mais() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mais - Guardião</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
