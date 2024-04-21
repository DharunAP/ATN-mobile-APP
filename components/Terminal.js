import { View, Text, TouchableOpacity, TextInput, Keyboard, StyleSheet } from "react-native";
import { useState } from "react";
import { DataInp } from "./DataInp";

export const Terminal = ()=>{
    const [conn,setConn] = useState(false)
    const [ip,setIP4] = useState(null)
    let url = ""
    const styles = StyleSheet.create({
        ipContainer:{
            flex:0.6,
            alignItems:'center', 
            backgroundColor:'white',
            borderWidth:3,
            borderColor:'green',
            paddingHorizontal:30,
            marginHorizontal:40,
            marginVertical:60
        }
    })
    const EnterIp = ()=>{
        const checkConn= async()=>{
            try{
                const status = await fetch(`http://${url}/`)
                // const data = status.json();
                // setConn(true);
                console.log(status)
                setConn(true)
            }
            catch(e){
                console.log(`http://${url}`)
            }
        }
        return(
            <View style={styles.ipContainer}>
                <Text style={{textAlign:'center',paddingBottom:20,marginTop:20, fontWeight:500,justifyContent:'flex-start'}}>Enter the ip in your network device in the below input box</Text>
                <TextInput onChangeText={(txt)=>url=txt} placeholder="Enter IP in the device" style={{borderWidth:2,height:50,width:200,padding:10}}/>
                <TouchableOpacity onPress={()=>{checkConn()}} style={{borderWidth:2,backgroundColor:'#252A3E',margin:15,paddingHorizontal:10}}>
                    <Text style={{color:'#ffffff'}}>Verify</Text>
                </TouchableOpacity>
            </View>
        )
    }
    if(conn) return (<DataInp ip={url}/>)
    else return EnterIp();
}