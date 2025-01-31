import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../../components/ComponentsPaciente/CustomTabBar';

import Home from '../../screens/TelasDoPaciente/Home';
import Tratamento from '../../screens/TelasDoPaciente/Tratamento';
import Mais from '../../screens/TelasDoPaciente/Mais';
import BemEstar from '../../screens/TelasDoPaciente/BemEstar';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}
        screenOptions={{
        headerShown: false
        }}
    >
        <Tab.Screen name ="Home" component={Home} />
        <Tab.Screen name ="BemEstar" component={BemEstar} />
        <Tab.Screen name ="Tratamento" component={Tratamento} />
        <Tab.Screen name ="Mais" component={Mais} />
    </Tab.Navigator>
);