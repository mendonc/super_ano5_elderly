import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabMedico from './TabMedico';
import MessagesScreen from '../../screens/TelasDoMedico/Mais/MessagesScreen';
import ChatScreen from '../../screens/TelasDoMedico/Mais/ChatScreen';
import ProfileScreen from '../../screens/TelasDoMedico/Mais/ProfileScreen';
import AccountScreen from '../../screens/TelasDoMedico/Mais/AccountScreen';
import ConfigurationsScreen from '../../screens/TelasDoMedico/Mais/ConfigurationsScreen';
import HelpScreen from '../../screens/TelasDoMedico/Mais/HelpScreen';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tab Principal do Médico */}
        <Stack.Screen name="TabMedico" component={TabMedico} />
        
        {/* Telas adicionais da aba "Mais" */}
        <Stack.Screen name="Mensagens" component={MessagesScreen} />
        <Stack.Screen name="Conversa" component={ChatScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Dados da Conta" component={AccountScreen} />
        <Stack.Screen name="Configurações" component={ConfigurationsScreen} />
        <Stack.Screen name="Ajuda" component={HelpScreen} />
    </Stack.Navigator>
);
