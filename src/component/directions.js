import React from "react";
import { Button } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const LocationPicker = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 53,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          style={{ marginTop: "auto", marginBottom: "auto", marginLeft: 20 }}
        />
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5
            name="dot-circle"
            size={15}
            color="#1f61cc"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
          <Button
            title={"Your Location"}
            buttonStyle={{
              borderColor: "#bfb1b0",
            }}
            type="outline"
            titleStyle={{ color: "black" }}
            containerStyle={{
              width: 200,
              //marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 150,
  },
});

export default LocationPicker;
