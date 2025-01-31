import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ConfigurationScreen() {
    const handlePrivacyPolicy = () => {
        Alert.alert('Política de Privacidade', 'Aqui você pode exibir a política de privacidade.');
    };

    return (
        <View style={styles.container}>
            {/* Política de Privacidade */}
            <View style={styles.settingItem}>
                <Text style={styles.label}>Política de Privacidade</Text>
                <TouchableOpacity onPress={handlePrivacyPolicy}>
                    <Text style={styles.buttonText}>Ver Política</Text>
                </TouchableOpacity>
            </View>

            {/* Sobre o Aplicativo */}
            <View style={styles.settingItem}>
                <Text style={styles.label}>Versão</Text>
                <Text style={styles.infoText}>1.0.0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    label: {
        fontSize: 16,
        color: '#333333',
    },
    buttonText: {
        fontSize: 16,
        color: '#007bff',
    },
    infoText: {
        fontSize: 16,
        color: '#777777',
    },
});
