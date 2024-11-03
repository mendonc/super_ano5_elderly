import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>

);