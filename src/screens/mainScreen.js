import React, { useContext, useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Map from "../component/mapView";
import Details from "../component/details";
import useDetails from "../hooks/useDetails";
import LocationPicker from "../component/directions";
import { SafeAreaView } from "react-native-safe-area-context";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";

import { Context as LocationContext } from "../context/locationContext";
const MainScreen = ({ navigation }) => {
  const [evac, setEvac] = useState(null);
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  const map = useRef(null);
  const [open, setOpen] = useDetails();
  const [err] = useLocation(useIsFocused);
  //console.log(useIsFocused);
  return (
    <View style={styles.container}>
      <Map
        openDetails={(val) => {
          setOpen(val);
        }}
        filterData={(val) => {
          setEvac(val);
        }}
        map={map}
      />
      {open ? (
        <View style={styles.details}>
          <Details
            evac={evac}
            setOpen={(val) => {
              setOpen(val);
            }}
            animate={() => {
              map.current.animateCamera({
                center: currentLocation.coords,
                zoom: 20,
                duration: 2000,
                //heading: 370,
                //pitch: 0,
              });
            }}
            zoomout={() => {
              map.current.animateCamera({
                center: currentLocation.coords,
                zoom: 16,
                duration: 2000,
                pitch: 0,
                heading: 0,
              });
            }}
          />
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
  //disply to the top of map
  picker: {
    position: "absolute",
    top: 0,

    width: "100%",
  },
});
export default MainScreen;
