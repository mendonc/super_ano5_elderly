import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabGuardiao from './TabGuardiao';
import DadosPessoaisScreen from '../../screens/TelasDoGuardiao/Mais/DadosPessoais';
import DadosDaContaScreen from '../../screens/TelasDoGuardiao/Mais/DadosDaConta';
import ConfiguracoesScreen from '../../screens/TelasDoGuardiao/Mais/Configuracoes';
import AjudaScreen from '../../screens/TelasDoGuardiao/Mais/Ajuda';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="TabGuardiao" component={TabGuardiao} />
    <Stack.Screen name="DadosPessoais" component={DadosPessoaisScreen} />
    <Stack.Screen name="DadosDaConta" component={DadosDaContaScreen} />
    <Stack.Screen name="Configuracoes" component={ConfiguracoesScreen} />
    <Stack.Screen name="Ajuda" component={AjudaScreen} />
  </Stack.Navigator>
);