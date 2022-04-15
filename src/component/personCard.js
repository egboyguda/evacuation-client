import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
//item in flatlist
//icon of person and name
import { ListItem, Button } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Context as ApiContext } from "../context/apiContext";
const PersonItem = ({ evac, setLoad }) => {
  //return a LISTITEM of evacues name with icon on left
  //add icon on left of container
  //console.log(evac);
  const { deleteEvacuees, getData } = useContext(ApiContext);
  return (
    <View>
      <ListItem.Swipeable
        rightContent={
          <Button
            title="Delete"
            icon={{ name: "delete", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
            onPress={async () => {
              setLoad(true);
              await deleteEvacuees(evac._id);
              await getData();
              setLoad(false);
            }}
          />
        }
      >
        <ListItem.Content>
          {/* icon left */}

          <View style={styles.list}>
            <Icon
              name="person"
              type="Ionicons"
              color="black"
              size={30}
              containerStyle={{ marginLeft: 10 }}
            />
            <View style={styles.LisTtitle}>
              <ListItem.Title>{evac.name}</ListItem.Title>
            </View>
          </View>
        </ListItem.Content>
      </ListItem.Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  //container of icon and name
  //container is item of flatlist
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  //icon of person
  iconContainer: {
    marginRight: 10,
  },
  //name of person
  text: {
    fontSize: 18,
  },
  //container of list
  list: {
    flexDirection: "row",
  },
  //container of title
  LisTtitle: {
    marginLeft: 10,
  },
});

export default PersonItem;
