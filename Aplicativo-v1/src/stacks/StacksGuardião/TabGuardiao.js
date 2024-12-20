import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../../components/ComponentsGuardiao/CustomTabBar';

import BemEstar from '../../screens/TelasDoGuardiao/BemEstar';
import Paciente from '../../screens/TelasDoGuardiao/Paciente';
import Mensagem from '../../screens/TelasDoGuardiao/Mensagem/ChatScreen';
import Mais from '../../screens/TelasDoGuardiao/Mais';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}
            screenOptions={{
            headerShown: false
            }}
        >
        <Tab.Screen name="BemEstar" component={BemEstar} />
        <Tab.Screen name="Paciente" component={Paciente} />
        <Tab.Screen name="Mensagem" component={Mensagem} />
        <Tab.Screen name="Mais" component={Mais} />
    </Tab.Navigator>
);
