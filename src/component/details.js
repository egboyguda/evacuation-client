import React, { useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Context as LocationContext } from "../context/locationContext";
import { navigate } from "../navigationRes";

const Details = ({ evac, setOpen, animate, zoomout }) => {
  const { state, getDestination } = useContext(LocationContext);

  return (
    <View>
      <Card>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              zoomout();
              getDestination(null);
              setOpen(false);
            }}
          >
            <Text style={{ color: "grey" }}>x</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Name: {evac.name}</Text>
          <Text>Address: {evac.address}</Text>
          <Text>
            Capacity: {evac.evacuees.length}/{evac.capacity}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title={"Direction"}
              onPress={() => {
                animate();
                getDestination(evac.location.coordinates);
              }}
              icon={
                <Icon
                  name="directions"
                  type="marterial-community"
                  color="white"
                />
              }
            />
            {/*view evacues button*/}
            <Button
              title={"View Evacuees"}
              onPress={() => {
                navigate("Evacuees", {
                  id: evac._id,
                });
              }}
              icon={
                <Icon name="people" type="marterial-community" color="white" />
              }
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  //direction button and evacuess button
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
export default Details;
