import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/mainScreen";
import PersonList from "../screens/viewEvacueesScreen";
import InitialScreen from "../screens/initialScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRes";
import { Context as authContext } from "../context/authContext";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerStack = () => {
  const { logout } = useContext(authContext);
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/**log out button*/}
            <DrawerItem
              label="Logout"
              onPress={async () => {
                logout();
              }}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="Drawer" component={DrawerStack} />
      <Stack.Screen name="Evacuees" component={PersonList} />
    </Stack.Navigator>
  );
};

export default MainStack;
