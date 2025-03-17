import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { deleteUser, getUserByCPF } from '../../data/LoginService';

export default function AccountScreen() {
    const [accountData, setAccountData] = useState({
        email: 'joao.silva@example.com',
        phone: '(11) 99999-9999',
        notifications: true,
    });

    const navigation = useNavigation();

    const handleSave = () => {
        Alert.alert('Dados Atualizados', 'As alterações foram salvas com sucesso.');
    };

    const handleChangePassword = () => {
        Alert.alert(
            'Alterar Senha',
            'Um link para redefinir sua senha foi enviado para o seu e-mail.'
        );
    };

    const handleLogout = async () => {
        Alert.alert('Sair da Conta', 'Tem certeza que deseja sair?', [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Sair',
                onPress: async () => {
                    try {
                        await AsyncStorage.removeItem('authToken');
                        await AsyncStorage.removeItem('userCPF');
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'LoginScreen' }],
                        });
                    } catch (error) {
                        console.error('Erro ao fazer logout:', error);
                        Alert.alert('Erro', 'Ocorreu um erro ao fazer logout.');
                    }
                },
            },
        ]);
    };

    const handleDeleteAccount = async () => {
        Alert.alert(
            'Excluir Conta',
            'Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    onPress: async () => {
                        try {
                            const cpf = await AsyncStorage.getItem('userCPF');
                            if (!cpf) {
                                Alert.alert('Erro', 'CPF não encontrado.');
                                return;
                            }
                            const userData = await getUserByCPF(cpf);
                            if (!userData) {
                                Alert.alert('Erro', 'Usuário não encontrado.');
                                return;
                            }
                            const userId = userData.user_id;
                            const success = await deleteUser(userId);
                            if (success) {
                                await AsyncStorage.removeItem('authToken');
                                await AsyncStorage.removeItem('userCPF');
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'LoginScreen' }],
                                });
                            } else {
                                Alert.alert('Erro', 'Falha ao excluir a conta.');
                            }
                        } catch (error) {
                            console.error('Erro ao excluir a conta:', error);
                            Alert.alert('Erro', 'Ocorreu um erro ao excluir a conta.');
                        }
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    value={accountData.email}
                    keyboardType="email-address"
                    onChangeText={(text) => setAccountData((prev) => ({ ...prev, email: text }))}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Telefone</Text>
                <TextInput
                    style={styles.input}
                    value={accountData.phone}
                    keyboardType="phone-pad"
                    onChangeText={(text) => setAccountData((prev) => ({ ...prev, phone: text }))}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Notificações</Text>
                <Switch
                    value={accountData.notifications}
                    onValueChange={(value) => setAccountData((prev) => ({ ...prev, notifications: value }))}
                />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Salvar Alterações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
                <Text style={styles.changePasswordButtonText}>Alterar Senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Sair da Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteAccountButton} onPress={handleDeleteAccount}>
                <Text style={styles.deleteAccountButtonText}>Excluir Conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    fieldContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: '#777777',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    saveButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    changePasswordButton: {
        backgroundColor: '#ffaa00',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    changePasswordButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#ff4d4d',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    logoutButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    deleteAccountButton: {
        backgroundColor: '#333333',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    deleteAccountButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});