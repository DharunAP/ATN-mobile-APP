import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native"
import { TerminalCard } from "./TerminalCard"
import Header from "./Header"
import { useState } from "react"
import * as Network from 'expo-network'

export const Terminal = ()=>{
    const [data,setData] = useState([{category:"",count:"",prescribe:""}])
    const [iter,setIter] = useState(0)
    const [ip,setIP] = useState(null)
    const getIp = async()=>{
        const x = await Network.getIpAddressAsync();
        console.log(x)
        setIP(x)
    }
    const addFields = () => {
        let newfield = {category:"",count:"",prescribe:""}
    
        setData([...data, newfield])
    }
    getIp()
    return (
        <>
            <Header/>
            <Text style={{marginTop:30,marginLeft:20,fontSize:25,fontWeight:700}}>Enter your request details :</Text>
            <View style={{height:45,left:240,padding:25,marginBottom:25}}>
                <TouchableOpacity onPress={()=>{addFields()}} style={{height:45,width:'30%',backgroundColor:'#252A3E',borderWidth:2,borderColor:'silver',borderRadius:30}}>
                    <Text style={{textAlign:'center',fontSize:15,paddingTop:10,color:'white'}}>Add Items+</Text>
                </TouchableOpacity>
            </View>

            <FlatList  
                data={data}  
                renderItem={({item,index}) =><TerminalCard data={item} list={data} setList={setData} index={index}/>}
            />  

            <Text>{ip}</Text>
        </>
    )
}

const style=StyleSheet.create({
    head:{
        margin:'35px',
        fontWeight:'600',
        // fontSize:'30px'
    }
})