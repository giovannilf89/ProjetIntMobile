import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer, Stack } from '@react-navigation/native';
import AppRoutes from './Routes'

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}


