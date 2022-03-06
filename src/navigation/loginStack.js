import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import SignUp from "../screens/signup";

const Stack = createNativeStackNavigator();
const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="LoginScreen" component={Login} />
        </Stack.Navigator>
    );
}
export default LoginStack