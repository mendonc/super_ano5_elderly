import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { cadastrarUsuario } from '../data/cadastroService';

export default function ProfileSelectionScreen({ route, navigation }) {
    const userData = route.params?.userData;

    if (!userData) {
        Alert.alert("Erro", "Dados do usuário não encontrados.");
        navigation.goBack();
        return null;
    }

    const handleProfileSelection = async (role) => {
        const finalUserData = { ...userData, role: role };

        try {
            await cadastrarUsuario(finalUserData);
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
            navigation.navigate(role === "paciente" ? "PacienteStack" : role === "medico" ? "MedicoStack" : "GuardiaoStack");
        } catch (error) {
            Alert.alert("Erro", error.message || "Erro ao cadastrar");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Em qual perfil você se encaixa?</Text>

            <TouchableOpacity style={styles.optionContainer} onPress={() => handleProfileSelection("paciente")}>
                <Text style={styles.optionText}>PACIENTE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer} onPress={() => handleProfileSelection("medico")}>
                <Text style={styles.optionText}>MÉDICO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer} onPress={() => handleProfileSelection("guardião")}>
                <Text style={styles.optionText}>GUARDIÃO</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3468bb',
      },
      optionContainer: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#3468bb',
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: '#ffffff',
        width: '80%',
        alignItems: 'center',
      },
      optionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3468bb',
    },
});