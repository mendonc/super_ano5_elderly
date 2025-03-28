import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProfileSelectionScreen from './src/screens/ProfileSelectionScreen.js';

export default function App() {
  return (
    <NavigationContainer>
      <ProfileSelectionScreen />
    </NavigationContainer>
  );
}
