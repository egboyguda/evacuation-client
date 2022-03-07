import React ,{useState,useContext}from "react";
import { View,Image ,StyleSheet, TouchableOpacity} from "react-native";
import { Button, Input ,Text} from "react-native-elements";
import Logo from "../component/logo";
import useEmailValidation from "../hooks/useEmailValidation";
import { Context as AuthContext } from "../context/authContext";
const SignUp = ({ navigation }) => {
    const[validate,msg] = useEmailValidation();
    const { state,signup } = useContext(AuthContext);
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [errMsg,setErr] = useState(null)

    return(
        <View style={styles.container}>
     
        <Logo/>
        {/*remove buttom padding margin of email input*/}
        <Input
            placeholder="Enter Full Name"
            leftIcon={{ type: "font-awesome", name: "user" }}
            leftIconContainerStyle={{ marginLeft: 10 }}
            
    
            onChangeText={(text)=>setName(text)}
            
        />
        <Input
            label="Email"
            placeholder=" Enter Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
          
            onChangeText={(val)=>{
                validate(val);
                setEmail(val);
            }}
            
            />
        {/*add error text below email input if email is not valid*/}
        {msg && <Text style={styles.errMsg}>{msg}</Text>}
        <Input
            label="Password"
            placeholder=" Enter Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={(val)=>{
                setPassword(val);
            }}
            secureTextEntry
            />
        <Input
            label="Confirm Password"
            placeholder=" Enter Password"
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
            onPress={()=>{
                signup({email,password,name});
            }}
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
    errMsg:{
        color:'red',
        //no margin top
        marginTop:0,
        
        fontSize:10,
    },
    //smooth edges input

})
export default SignUp;