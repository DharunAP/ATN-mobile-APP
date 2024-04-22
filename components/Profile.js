import profile from "../assets/profile.png";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { useState,useEffect } from "react";
import { useKeyboardVisible } from "./keyboardVisible";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Profile=()=>{
    const [address,setAddress] = useState("")
    const [value,setValue] = useState({})
    useEffect(() => {
      const getData = async (key) => {
          try {
              let x = await AsyncStorage.getItem(key);
              if (x !== null) {
                  setValue(JSON.parse(x));
                  setAddress(JSON.parse(x).address || "");
              } else {
                  console.log('No data found with the key:', key);
              }
          } catch (e) {
              console.error('Error retrieving data:', e);
          }
      };
      getData('User');
    }, []);
    const storeData = async (key, val) => {
        try {
          await AsyncStorage.setItem(key, val);
          console.log('Data saved successfully!');
        } catch (e) {
          console.error('Error saving data:', e);
        }
      };
    const save = async()=>{
        var x = value
        x.address=address
        setValue(x)
        try{
          const res = await fetch(`http://localhost:8000/update-address`,{
            method:'POST',
            headers:{
             'Content-Type':'application/JSON'
            },
            body:JSON.stringify(value)
          });
        }catch(e){
          console.log(e)
          storeData('User',value)
        }
        
    }
    // console.log(value,typeof value)
    return (
        <View style={{flex:1,backgroundColor:'#FFE6CF',flexDirection:"column",alignItems:"center"}}>
            <View style={{borderRadius:'50%',maxHeight:200}}>
                <Image source={profile} style={{ width: 110, height: 220}} resizeMode="contain" />
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-start",width:270,marginBottom:15}}>
            <Text style={{fontSize:20,fontWeight:'500'}}>Name</Text>
            <Text style={{fontSize:20,marginLeft:60,color:'#252A3E'}}>{value['name']}</Text>
            </View>

            <View style={{display:(useKeyboardVisible())?'none':'flex',flexDirection:"row",justifyContent:"flex-start",width:270,marginBottom:15}}>
            <Text style={{fontSize:20,fontWeight:'500'}}>Email</Text>
            <Text style={{fontSize:20,maxWidth:280,marginLeft:60,color:'#252A3E'}}>{value['email']}</Text>
            </View>

            <View style={{display:(useKeyboardVisible())?'none':'flex',flexDirection:"row",justifyContent:"flex-start",width:270,marginBottom:15}}>
            <Text style={{fontSize:20,fontWeight:'500'}}>Number</Text>
            <Text style={{fontSize:20,marginLeft:43,color:'#252A3E'}}>{value['number']}</Text>
            </View>

            <View style={{flexDirection:"row",justifyContent:"flex-start",width:270,marginBottom:15}}>
                <Text style={{fontSize:20,fontWeight:'500'}}>Address</Text>
                <TextInput value={address} onChangeText={(txt)=>setAddress(txt)} style={{backgroundColor:'white',maxHeight:180,padding:10,marginLeft:40,width:190,color:'#252A3E'}} multiline/>
            </View>
            <TouchableOpacity onPress={()=>{save()}} style={{marginTop:15,borderWidth:2, borderRadius:20, paddingHorizontal:20, paddingVertical:3, backgroundColor:'#252A3E', }}><Text style={{color:'white', fontSize:17}}>Save</Text></TouchableOpacity>
        </View>
    )
}