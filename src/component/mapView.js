import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MapView, {
  Marker,
  Circle,
  PROVIDER_GOOGLE,
  animateToRegion,
} from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Context as ApiContext } from "../context/apiContext";
import { Context as locationContext } from "../context/locationContext";
import MapViewDirections from "react-native-maps-directions";
import useDetails from "../hooks/useDetails";

const Map = ({ openDetails, filterData, map }) => {
  const {
    state: { currentLocation, destination },
  } = useContext(locationContext);
  const { getData, state } = useContext(ApiContext);
  const evac = [...state.evac];
  const [view, setView] = useState(false);
  const MAP_API_KEY = "AIzaSyDWxUQN7gvXKXuQooujwG7BCcQGKVMGvow";
  //const map = useRef(null);
  if (!currentLocation) {
    return (
      <ActivityIndicator size="large" style={{ marginTop: 200 }} color="red" />
    );
  }

  return (
    <MapView
      style={styles.map}
      ref={(ref) => (map.current = ref)}
      mapType="standard"
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      }}
      showsUserLocation={true}
      showsMyLocationButton={false}
      toolbarEnabled={false}
      followsUserLocation={true}
      provider={PROVIDER_GOOGLE}
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
      {
        //if destination not null display mapdirection
        destination && (
          <MapViewDirections
            origin={currentLocation.coords}
            destination={destination}
            apikey={MAP_API_KEY}
            strokeWidth={10}
            //green line
            strokeColor="green"
            optimizeWaypoints={true}
          />
        )
      }
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
export default Map;
