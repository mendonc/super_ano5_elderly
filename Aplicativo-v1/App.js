import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/TelaLogin/telalogin";
import ProfileSelectionScreen from "./src/screens/ProfileSelectionScreen"; // Certifique-se de que o caminho está correto!

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ProfileSelectionScreen" component={ProfileSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};