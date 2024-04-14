import { useState } from "react"
import { SelectList } from "react-native-dropdown-select-list"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';

export const TerminalCard = ()=>{
    const [category, setCategory] = useState("")
    const [selectedValue, setSelectedValue] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [amount,setAmount] = useState(0)
    var options = []
    const categoryList = ['Food','Madicine','Water','Emergency']
    categoryList.forEach((e)=>{options.push({label:e,value:e})})
    return (
        <View style={{height:160,margin:25,borderWidth:1, borderRadius:30,backgroundColor:'white'}}>
            <View style={{flex:1,paddingVertical:25,paddingHorizontal:20,flexDirection:'row'}}>
                <Text style={{justifyContent:'space-between', fontSize:20}}>Category</Text>
                <SelectList
                    data = {options}
                    setSelected = {setSelectedValue}
                    boxStyles = {{width:170, marginLeft:30}}
                    dropdownStyles = {{width:170,height: 150,backgroundColor:'white',zIndex:10}}
                />
            </View>

            <View style={{flex:1,paddingVertical:25,paddingHorizontal:20,flexDirection:'row'}}>
                <Text style={{justifyContent:'space-between', fontSize:20}}>Members</Text>
                <TouchableOpacity onPress={()=>{setAmount((amount>0)?amount-1:0);}}><FontAwesome5 name="minus" size={20} style={{marginLeft:30,paddingTop:5}} color="black" /></TouchableOpacity>
                <Text style={{borderBottomWidth:1, width:30, textAlign:'center', marginHorizontal:15,fontSize:23, height:30}}>{amount}</Text>
                <TouchableOpacity onPress={()=>setAmount(amount+1)}><FontAwesome5 name="plus" size={20} style={{paddingTop:5}} color="black" /></TouchableOpacity>
            </View>
            
        </View>
    )
}