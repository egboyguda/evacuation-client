import React from "react";
import { View,Image ,Text,StyleSheet} from "react-native";

const Logo = () => {
    return(
        <View style={styles.container}>
        <Image source={require('../../assets/evac.png')} style={styles.logo}/>
        <Text style={styles.text}>
        Evacuation Locator
        </Text>
   
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        
        justifyContent:'center',
        alignItems:'center'
        
    },
    logo:{
        width:230,
        height:230,
        marginTop:50
    },
    text:{
        fontSize:20,
        color:'#000',
        marginTop:10,
        fontWeight:'bold'
    },
  

})
export default Logo