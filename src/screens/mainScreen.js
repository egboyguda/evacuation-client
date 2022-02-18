import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Map from "../component/mapView";
import Details from "../component/details";
import useDetails from "../hooks/useDetails";

const MainScreen = ({ navigation }) => {
  const [evac, setEvac] = useState(null);
  const [open, setOpen] = useDetails();

  return (
    <View style={styles.container}>
      <Map
        openDetails={(val) => {
          setOpen(val);
        }}
        filterData={(val) => {
          setEvac(val);
        }}
      />
      {open ? (
        <View style={styles.details}>
          <Details evac={evac} />
        </View>
      ) : null}
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
