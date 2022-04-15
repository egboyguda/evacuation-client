import "react-native-gesture-handler";
import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ApiProvider } from "./src/context/apiContext";
import MainStack from "./src/navigation/mainStack";
import { Provider as LocationProvider } from "./src/context/locationContext";
import { Provider as AuthProvider } from "./src/context/authContext";
import LoginStack from "./src/navigation/loginStack";
import { setNavigator } from "./src/navigationRes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InitialScreen from "./src/screens/initialScreen";
import { Context as AuthContext } from "./src/context/authContext";
const Stack = createNativeStackNavigator();
App = () => {
  const { tryLocalSignin, state } = useContext(AuthContext);
  useEffect(async () => {
    await tryLocalSignin();
  }, []);

  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.token ? (
          <Stack.Screen name="Map" component={MainStack} />
        ) : (
          <Stack.Screen name="Login" component={LoginStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </AuthProvider>
    </LocationProvider>
  );
};
