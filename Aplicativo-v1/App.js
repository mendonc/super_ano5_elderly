import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/TelaLogin/telalogin.js";
import ProfileSelectionScreen from "./src/screens/ProfileSelectionScreen.js";
import CadastroScreen from "./src/screens/TelaLogin/telacadastro.js";
import MainStackPaciente from './src/stacks/StacksPaciente/MainStackPaciente';
import MainStackMedico from './src/stacks/StacksMedico/MainStackMedico';
import MainStackGuardiao from './src/stacks/StacksGuardião/MainStackGuardiao';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
                <Stack.Screen name="ProfileSelectionScreen" component={ProfileSelectionScreen} />
                <Stack.Screen name="PacienteStack" component={MainStackPaciente} />
                <Stack.Screen name="MedicoStack" component={MainStackMedico} />
                <Stack.Screen name="GuardiaoStack" component={MainStackGuardiao} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};