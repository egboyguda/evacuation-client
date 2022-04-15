//flatlist contains list of evacuees
import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Icon,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-elements";
import PersonItem from "../component/personCard";
import { Context as apiContext } from "../context/apiContext";
import ModalCom from "../component/modal";
const PersonList = ({ route }) => {
  const { state } = useContext(apiContext);
  const { id } = route.params;
  const [visible, isVisible] = useState(false);
  const [load, setLoad] = useState(false);
  const evac = state.evac.filter((evac) => evac._id === id)[0];
  console.log("test", evac);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Add Evacuee"
        onPress={() => {
          isVisible(true);
        }}
        buttonStyle={styles.button}
      />
      {load ? (
        <ActivityIndicator
          size="large"
          //green
          color="green"
          //center screen
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      ) : null}
      {evac.evacuees.length > 0 ? (
        <FlatList
          data={evac.evacuees}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <PersonItem
                evac={item}
                setLoad={(val) => {
                  setLoad(val);
                }}
              />
            );
          }}
        />
      ) : (
        <Text style={styles.text}>No evacuees yet</Text>
      )}
      <ModalCom
        isVisible={visible}
        setLoad={(val) => {
          setLoad(val);
        }}
        onClose={() => {
          isVisible(false);
        }}
        evacID={evac._id}
        title="Enter the Name of Evacuee"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
  },
  button: {
    backgroundColor: "green",
    margin: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
export default PersonList;
