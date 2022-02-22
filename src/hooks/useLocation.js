import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useState, useContext } from "react";
import { Context as locationContext } from "../context/locationContext";
export default (shouldTrack) => {
  const [err, setErr] = useState(null);

  const { addLocation, state } = useContext(locationContext);
  let subsciber;
  const startWatching = async (shouldTrack) => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("please enable location services");
      }
      subsciber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
          addLocation(location);
        }
      );
    } catch (error) {
      setErr(error);
    }
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      if (subsciber) {
        subsciber.remove();
      }
      subsciber = null;
    }
    return () => {
      if (subsciber) {
        subsciber.remove();
      }
    };
  }, [subsciber, shouldTrack]);

  return [err];
};
