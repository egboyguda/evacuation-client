import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Context as ApiContext } from "../context/apiContext";
import useDetails from "../hooks/useDetails";
const Map = ({ openDetails, filterData }) => {
  const [filter] = useDetails();
  const { getData, state } = useContext(ApiContext);

  const evac = [...state.evac];

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 12.53577,
        longitude: 124.874608,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
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
