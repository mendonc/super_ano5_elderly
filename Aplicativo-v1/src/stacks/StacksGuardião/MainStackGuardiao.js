import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/TelasDoGuardião/Home';

const Stack = createStackNavigator();

export default function MainStackGuardiao() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
