import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// Workaround to not let TypeScript analyze this library
const { NavigationContainer } = require('@react-navigation/native');
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { API_URL } from './src/config/envVariables';

import MainNavigator from './src/navigation/MainNavigator';
import { navigationRef } from './src/navigation/controls';

const App = () => {
  console.log('API_URL', API_URL);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
