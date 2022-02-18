import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Map from "../component/mapView";
import Details from "../component/details";
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.details}>
        <Details />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  details: {
    //display view to bottom screen
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 20,
  },
});
export default MainScreen;
