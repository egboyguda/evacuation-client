// rectangle component below map
//with evacuation details
import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  Icon,
} from "react-native";

const Details2 = ({ evac }) => {
  console.log(evac);
  return (
    <View style={styles.container}>
      {/*name text*/}
      <Text style={styles.text}>Name: {evac.name}</Text>
      {/*address text*/}
      <Text style={styles.text}>Address: {evac.address}</Text>
      {/*capacity text*/}
      <Text style={styles.text}>
        Capacity: {evac.evacuees.length}/{evac.capacity}
      </Text>
      {/*direction button and view evacuees button*/}
      <View style={styles.buttonContainer}>
        <Button
          title={"Direction"}
          onPress={() => {
            getDestination(evac.location.coordinates);
          }}
          icon={
            <Icon name="directions" type="marterial-community" color="white" />
          }
        />
        <Button
          title={"View Evacuees"}
          onPress={() => {
            navigation.navigate("Evacuees", {
              evac: evac,
            });
          }}
          icon={<Icon name="people" type="marterial-community" color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //container buttom of map
  //rectangle
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 20,
  },
  //text inside rectangle
  text: {
    color: "grey",
  },
  //direction button and view evacuees button inside rectangle
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
});
export default Details2;
