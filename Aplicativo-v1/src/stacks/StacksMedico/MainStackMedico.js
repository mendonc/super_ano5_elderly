import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabMedico from './TabMedico';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="TabMedico" component={TabMedico} />
    </Stack.Navigator>

);