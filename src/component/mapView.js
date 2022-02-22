import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";

import { Context as ApiContext } from "../context/apiContext";
import { Context as locationContext } from "../context/locationContext";
import useDetails from "../hooks/useDetails";
const Map = ({ openDetails, filterData }) => {
  const {
    state: { currentLocation },
  } = useContext(locationContext);
  const { getData, state } = useContext(ApiContext);

  const evac = [...state.evac];
  if (!currentLocation) {
    return (
      <ActivityIndicator size="large" style={{ marginTop: 200 }} color="red" />
    );
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={20}
        strokeWidth={2}
        strokeColor="#3399ff"
        fillColor="#80bfff"
      />
      {evac.map((e) => (
        <Marker
          key={e._id}
          coordinate={e.location.coordinates}
          onPress={() => {
            filterData(e);

            openDetails(true);
          }}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
export default Map;
