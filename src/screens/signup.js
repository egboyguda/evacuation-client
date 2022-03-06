import React from "react";
import { View,Image ,StyleSheet, TouchableOpacity} from "react-native";
import { Button, Input ,Text} from "react-native-elements";
import Logo from "../component/logo";
const SignUp = ({ navigation }) => {
    return(
        <View style={styles.container}>
        {/*add image center*/}
        <Logo/>
        <Text style={styles.title}>Sign Up</Text>
        <Input
            label="Email"
            placeholder="/>"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={()=>{}}
            />
        <Input
            label="Password"
            placeholder="/>"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={()=>{}}
            secureTextEntry
            />
        <Input
            label="Confirm Password"
            placeholder="/>"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={()=>{}}
            secureTextEntry
            />
            <TouchableOpacity onPress={()=>{
                navigation.navigate('LoginScreen')
            }}>
            <Text style={styles.registerTxt}>Already have an account? Click to Login</Text>
            </TouchableOpacity>
  
        <Button
            title="Sign Up"
            onPress={()=>{}}
            buttonStyle={{
                //backgroundcolor green
                backgroundColor: "#00a680",
                //medium button width
                width: "90%",
                //center button
                alignSelf: "center",
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    //center the content of view
    container:{
        flex:1,
        justifyContent:'center',
      
    },
    //title text
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        textAlign:'center'
        
    },
    //text below title
    registerTxt:{
        fontSize:10,
        color:'#00a680',
        marginTop:10,
        fontWeight:'bold'
    },
    
})
export default SignUp;