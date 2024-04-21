import { View, Text, TouchableOpacity, TextInput, Keyboard, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useKeyboardVisible} from './keyboardVisible'

export const DataInp = ({ip})=>{
    console.log(ip)
    const [food,setFood] = useState([false,0])
    const [water,setWater] = useState([false,0])
    const [emergency,setEmergency] = useState([false,0])
    const [medicine, setMedicine] = useState([false,0])
    const [pres,setPres] = useState("")
    const [error,setError] = useState(null)
    var form = new FormData();
    const fet = async()=>{
        console.log(form)
        try{
            const res = await fetch(`http://${ip}/endpoint`,{
                method:'POST',
                body:form
            });
            
        }catch(e){
            setError("Please connect your lora with your mobile's hotspot...");
            console.log(e)
        }
    }
    const handleSubmit = ()=>{
        var js ={}
        if(medicine[0]){
            js.medicine = medicine[1]
            if(pres==""){
                setError("Please give prescriptions to the medicine in the bottom...")
                return
            }
            js.pres = pres
        }
        if(food[0])js.food=food[1]
        if(water[0])js.water = water[1]
        if(emergency[0])js.emergency = emergency[1]
        
        
        var dat = JSON.stringify(js)
        form.append("data",dat)
        fet()
    }
    const ch = (x,setX)=>{
        setX([!x[0],(!x[0])?x[1]:0])
    }
    const amt = (x,setX,v)=>{
        setX([x[0],x[1]+v])
    }
    return (
        <View style={{backgroundColor:"#FFE6CF",flex:1}}>
         {(error!=null)?<View style={{position:'absolute',width:350,top:0, zIndex:20, backgroundColor:'white',borderWidth:3,borderColor:'red',padding:10,paddingHorizontal:30,marginHorizontal:20}}>
            <Text style={{fontSize:20,color:'red',fontWeight:'700'}}>Error</Text>
            <AntDesign onPress={()=>{setError(null)}} name="closecircle" style={{marginLeft:260,position:'relative',top:-25}} size={17} color="#252A3E" />
            <Text>{error}</Text>
         </View>:<></>}
         <View style={{display:(useKeyboardVisible())?"none":'flex',flex:0.9,justifyContent:'space-between',borderWidth:2,margin:35,backgroundColor:'white',borderRadius:20,padding:20}}>
            <Text style={{fontSize:20,fontWeight:'600',color:'#F9973E',textAlign:"center",marginBottom:30}}>Requesting Form</Text>
            <View style={{flex:0.2,flexDirection:'row',justifyContent:'space-between',margin:20}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <CheckBox
                    value={food[0]}
                    onValueChange={()=>ch(food,setFood)}
                    // style={styles.checkbox}
                />
                <Text style={{paddingLeft:10,fontSize:17}}>Food</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity disabled={!food[0]} onPress={()=>{amt(food,setFood,-1)}}><FontAwesome5 name="minus" size={15} style={{marginLeft:30,paddingTop:5}} color="black" /></TouchableOpacity>
                <Text style={{borderBottomWidth:1, width:30, textAlign:'center', marginHorizontal:15,fontSize:23, height:30}}>{(food[1]<0)?setFood([food[0],0]):food[1]}</Text>
                <TouchableOpacity disabled={!food[0]} onPress={()=>{amt(food,setFood,1)}}><FontAwesome5 name="plus" size={15} style={{paddingTop:5}} color="black" /></TouchableOpacity>
                </View>
            </View>

            <View style={{flex:0.2,flexDirection:'row',margin:20}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <CheckBox
                    value={water[0]}
                    onValueChange={()=>ch(water,setWater)}
                    // style={styles.checkbox}
                />
                <Text style={{paddingLeft:10,fontSize:17}}>water</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity disabled={!water[0]} onPress={()=>{amt(water,setWater,-1)}}><FontAwesome5 name="minus" size={15} style={{marginLeft:30,paddingTop:5}} color="black" /></TouchableOpacity>
                <Text style={{borderBottomWidth:1, width:30, textAlign:'center', marginHorizontal:15,fontSize:23, height:30}}>{(water[1]<0)?setWater([water[0],0]):water[1]}</Text>
                <TouchableOpacity disabled={!food[0]} onPress={()=>{amt(water,setWater,1)}}><FontAwesome5 name="plus" size={15} style={{paddingTop:5}} color="black" /></TouchableOpacity>
                </View>
            </View>

            <View style={{flex:0.2,flexDirection:'row',margin:20}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <CheckBox
                    value={emergency[0]}
                    onValueChange={()=>ch(emergency,setEmergency)}
                    // style={styles.checkbox}
                />
                <Text style={{paddingLeft:10,fontSize:17}}>Emergency</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity disabled={!emergency[0]} onPress={()=>{amt(emergency,setEmergency,-1)}}><FontAwesome5 name="minus" size={15} style={{marginLeft:30,paddingTop:5}} color="black" /></TouchableOpacity>
                <Text style={{borderBottomWidth:1, width:30, textAlign:'center', marginHorizontal:15,fontSize:23, height:30}}>{(emergency[1]<0)?setEmergency([food[0],0]):emergency[1]}</Text>
                <TouchableOpacity disabled={!emergency[0]} onPress={()=>{amt(emergency,setEmergency,1)}}><FontAwesome5 name="plus" size={15} style={{paddingTop:5}} color="black" /></TouchableOpacity>
                </View>
            </View>

            <View style={{flex:0.2,flexDirection:'row',margin:20}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <CheckBox
                    value={medicine[0]}
                    onValueChange={()=>ch(medicine,setMedicine)}
                    // style={styles.checkbox}
                />
                <Text style={{paddingLeft:10,fontSize:17}}>Madicine</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity disabled={!medicine[0]} onPress={()=>{amt(medicine,setMedicine,-1)}}><FontAwesome5 name="minus" size={15} style={{marginLeft:30,paddingTop:5}} color="black" /></TouchableOpacity>
                <Text style={{borderBottomWidth:1, width:30, textAlign:'center', marginHorizontal:15,fontSize:23, height:30}}>{(medicine[1]<0)?setMedicine([medicine[0],0]):medicine[1]}</Text>
                <TouchableOpacity disabled={!medicine[0]} onPress={()=>{amt(medicine,setMedicine,1)}}><FontAwesome5 name="plus" size={15} style={{paddingTop:5}} color="black" /></TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{handleSubmit()}} style={{alignItems:'center',marginTop:15,borderWidth:1,marginHorizontal:80,paddingVertical:4,borderRadius:9,backgroundColor:'#F9973E'}}><Text style={{color:'white'}}>Submit</Text></TouchableOpacity>
         </View>
         {(medicine[0])? <>
                            <TextInput 
                                disabled={!medicine[0]}
                                placeholder="Type the Mecine's prescription..."
                                style={{borderWidth:1, backgroundColor:'white', padding:5, paddingLeft:15, marginHorizontal:30,fontSize:15, height:100}}
                                multiline
                                onChangeText={(event)=>{
                                    setPres(event)
                                }}
                            />
                            <TouchableOpacity onPress={()=>{Keyboard.dismiss()}} style={{marginTop:15,borderWidth:1,width:50,marginLeft:300,padding:4,borderRadius:9,backgroundColor:'#F9973E'}}><Text style={{color:'white',textAlign:'center'}}>Save</Text></TouchableOpacity>
                        </> :<></>}
        </View>
    );
}