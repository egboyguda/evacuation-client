import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Context as ApiContext } from '../context/apiContext';

const Map = () => {
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
            <Marker coordinate={e.location.coordinates} />
        ))}   
    </MapView>)
}


const styles = StyleSheet.create({
map:{
    flex:1
},
})
export default Map;