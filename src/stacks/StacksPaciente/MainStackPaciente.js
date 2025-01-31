import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabPaciente from './TabPaciente';
import MessagesScreen from '../../screens/TelasDoPaciente/Mais/MessagesScreen';
import ChatScreen from '../../screens/TelasDoPaciente/Mais/ChatScreen';
import ProfileScreen from '../../screens/TelasDoPaciente/Mais/ProfileScreen';
import AccountScreen from '../../screens/TelasDoPaciente/Mais/AccountScreen';
import ConfigurationsScreen from '../../screens/TelasDoPaciente/Mais/ConfigurationsScreen';
import HelpScreen from '../../screens/TelasDoPaciente/Mais/HelpScreen';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tab Principal do Médico */}
        <Stack.Screen name="TabPaciente" component={TabPaciente} />

        {/* Telas adicionais da aba "Mais" */}
        <Stack.Screen name="Mensagens" component={MessagesScreen} />
        <Stack.Screen name="Conversa" component={ChatScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Dados da Conta" component={AccountScreen} />
        <Stack.Screen name="Configurações" component={ConfigurationsScreen} />
        <Stack.Screen name="Ajuda" component={HelpScreen} />
    </Stack.Navigator>
);