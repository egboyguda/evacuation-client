import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ApiProvider } from './src/context/apiContext';
import MainStack from './src/navigation/mainStack';
const Stack = createNativeStackNavigator();
App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Map' component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <ApiProvider>
      <App />
    </ApiProvider>
  );
};
