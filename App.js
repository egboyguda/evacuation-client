import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ApiProvider } from "./src/context/apiContext";
import MainStack from "./src/navigation/mainStack";
import { Provider as LocationProvider } from "./src/context/locationContext";
import LoginStack from "./src/navigation/loginStack";
const Stack = createNativeStackNavigator();
App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginStack} />
        <Stack.Screen name="Map" component={MainStack} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <LocationProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </LocationProvider>
  );
};
