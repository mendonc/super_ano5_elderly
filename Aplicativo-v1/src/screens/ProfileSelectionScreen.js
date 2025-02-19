import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importando as stacks de perfis
import MainStackPaciente from '../stacks/StacksPaciente/MainStackPaciente';
import MainStackMedico from '../stacks/StacksMedico/MainStackMedico';
import MainStackGuardiao from '../stacks/StacksGuardião/MainStackGuardiao';

const Stack = createStackNavigator();

export default function ProfileSelectionScreen() {
  return (
      <Stack.Navigator initialRouteName="ProfileSelection" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProfileSelection" component={ProfileSelection} />
        <Stack.Screen name="PacienteStack" component={MainStackPaciente} />
        <Stack.Screen name="MedicoStack" component={MainStackMedico} />
        <Stack.Screen name="GuardiaoStack" component={MainStackGuardiao} />
      </Stack.Navigator>
  );
}

function ProfileSelection({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em qual perfil você se encaixa?</Text>

      {/* Botão Paciente */}
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('PacienteStack')}
      >
        <Text style={styles.optionText}>PACIENTE</Text>
      </TouchableOpacity>

      {/* Botão Médico */}
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('MedicoStack')}
      >
        <Text style={styles.optionText}>MÉDICO</Text>
      </TouchableOpacity>

      {/* Botão Guardião */}
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('GuardiaoStack')}
      >
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
