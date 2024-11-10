import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackMedico from './src/stacks/StacksMedico/MainStackMedico';

export default () => {
  return (
    <NavigationContainer>
      <MainStackMedico />
    </NavigationContainer>
  );
}

