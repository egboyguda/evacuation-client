import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

const Details = () => {
  return (
    <View>
      <Card>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ color: "grey" }}>x</Text>
        </View>
        <View>
          <Text>EVACUATION NAME</Text>
          <Text>address</Text>
          <Text>capacity</Text>
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
