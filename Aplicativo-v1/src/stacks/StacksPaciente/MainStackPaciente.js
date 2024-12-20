import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PacienteHome from '../../screens/TelasDoPaciente/Home';

const Stack = createStackNavigator();

export default function MainStackPaciente() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PacienteHome" component={PacienteHome} />
    </Stack.Navigator>
  );
}
