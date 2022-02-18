import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

const Details = ({ evac }) => {
  return (
    <View>
      <Card>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ color: "grey" }}>x</Text>
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
              icon={
                <Icon
                  name="directions"
                  type="marterial-community"
                  color="white"
                />
              }
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  //direction button and cancel button inside card
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
});
export default Details;
