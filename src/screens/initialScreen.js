import React, { useContext, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { Context as ApiContext } from "../context/apiContext";
import { Context as AuthContext } from "../context/authContext";
const InitialScreen = ({ navigation }) => {
  const { getData } = useContext(ApiContext);
  const { tryLocalSignin, state } = useContext(AuthContext);
  useEffect(async () => {
    await getData();
    navigation.navigate("Drawer");
  }, []);

  //console.log(state.evac);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
  },
});
export default InitialScreen;
