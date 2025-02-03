import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../../components/ComponentsMedico/CustomTabBar';

import Home from '../../screens/TelasDoMedico/Home';
import Paciente from '../../screens/TelasDoMedico/Paciente';
import Calendario from '../../screens/TelasDoMedico/Calendario';
import Mais from '../../screens/TelasDoMedico/Mais';

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