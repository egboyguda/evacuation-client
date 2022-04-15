import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Button, Input } from "react-native-elements";
import Logo from "../component/logo";
import { Context as AuthContext } from "../context/authContext";
const Login = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Logo />

      <Input
        label="Email"
        placeholder=" Enter Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={(val) => {
          setEmail(val);
        }}
      />
      {
        /* activity indicator when submitting*/
        <ActivityIndicator animating={loading} size="large" color="#0000ff" />
      }
      <Input
        label="Password"
        placeholder=" Enter Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={(val) => {
          setPassword(val);
        }}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        <Text style={styles.registerTxt}>
          Not Register yet? Click To Register
        </Text>
      </TouchableOpacity>

      <Button
        title="Login"
        onPress={() => {
          setLoading(true);
          signin({ email, password });
          setLoading(false);
        }}
        buttonStyle={{
          //backgroundcolor green
          backgroundColor: "#00a680",
          //medium button width
          width: "90%",
          //center button
          alignSelf: "center",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  //center the content of view
  container: {
    flex: 1,
    justifyContent: "center",
  },
  //center png file
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
  },
  //bold title text below png center
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  //small register text below password input
  //below left side of password input
  registerTxt: {
    //no margine top
    marginTop: 0,
    fontSize: 12,
    marginLeft: 10,

    color: "#00a680",
  },
});
export default Login;
