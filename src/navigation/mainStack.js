import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/mainScreen';
import InitialScreen from '../screens/initialScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ini' component={InitialScreen} />
      <Stack.Screen name='Main' component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
