/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackNavigator } from './src/navigation/Stack.Navigator';


const App: React.FC = () => {

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  )
}

export default App;
