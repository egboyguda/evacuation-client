import React, { useState, useContext } from "react";
import {
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Text,
  View,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { Context as ApiContext } from "../context/apiContext";
const ModalCom = ({ isVisible, onClose, title, evacID, setLoad }) => {
  const [name, setName] = useState("");
  const { addEvacuees, getData } = useContext(ApiContext);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        onClose();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <Input
            onChangeText={(val) => {
              setName(val);
            }}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              onPress={async () => {
                setLoad(true);
                await onClose();
                await addEvacuees(name, evacID);
                await getData();
                setLoad(false);
              }}
              buttonStyle={styles.button}
            />
            <Button
              title="Close"
              onPress={() => {
                onClose();
              }}
              buttonStyle={styles.modalButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "grey",
  },
  modalButton: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 2,

    //space between buttons
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
export default ModalCom;
