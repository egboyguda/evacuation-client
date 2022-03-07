import React from "react";
import { View,StyleSheet,Image,Text, TouchableOpacity } from "react-native";
import { Button,Input } from "react-native-elements";
import Logo from "../component/logo";

const Login = ({navigation})=>{
  
    return(

        <View style={styles.container}>
        <Logo/>
      
        <Input
            label="Email"
            placeholder=" Enter Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={()=>{}}
           
        />
     
        <Input
            label="Password"
            placeholder=" Enter Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={()=>{}}
        
            secureTextEntry
        />
        <TouchableOpacity
         onPress={()=>{
                navigation.navigate('SignUpScreen')
         }}>
        <Text style={styles.registerTxt}>Not Register yet? Click To Register</Text>
        </TouchableOpacity>
       
        <Button
            title="Login"
            onPress={()=>{}}
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
    )
}
const styles = StyleSheet.create({
    //center the content of view
    container:{
        flex:1,
        justifyContent:'center',
      

    },
    //center png file
    image:{
        width:200,
        height:200,
        alignSelf:'center',
        marginTop:50

    },
    //bold title text below png center
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
        alignSelf:'center'
    },
    //small register text below password input
    //below left side of password input
    registerTxt:{
        //no margine top
        marginTop:0,
        fontSize:12,
        marginLeft:10,
    
        color:'#00a680'

    },
  

})
export default Login;