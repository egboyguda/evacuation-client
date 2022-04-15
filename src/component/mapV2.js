import React from "react";
import { View,StyleSheet } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoiZ2JveWd1ZGEiLCJhIjoiY2t3MjBhYnI3MDhrZjJub2pzaWJsYjk1biJ9.f9gpPLEsbWcJZN9rdHIj5Q")

const MapV2 = () => {
    return (
     
        <MapboxGL.MapView
            styleURL="mapbox://styles/mapbox/streets-v11"
            zoomLevel={15}
            centerCoordinate={[-122.4194, 37.7749]}
            style={styles.map}
        >
            <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={[-122.4194, 37.7749]}
            />
            <MapboxGL.UserLocation />
        </MapboxGL.MapView>
     
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    map: {
        flex: 1,
    }
})
export default MapV2;