import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Paciente from '../screens/Paciente';
import Calendario from '../screens/Calendario';
import Mais from '../screens/Mais';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}
        screenOptions={{
        headerShown: false
        }}
    >
        <Tab.Screen name ="Home" component={Home} />
        <Tab.Screen name ="Paciente" component={Paciente} />
        <Tab.Screen name ="Calendario" component={Calendario} />
        <Tab.Screen name ="Mais" component={Mais} />
    </Tab.Navigator>
);