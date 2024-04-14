import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TerminalCard } from "./TerminalCard"


export const Terminal = ()=>{
    return (
        <>
            <Text style={{marginTop:30,marginLeft:20,fontSize:25,fontWeight:700}}>Enter your request details :</Text>
            <View style={{height:45,left:240,padding:25,marginBottom:25}}>
                <TouchableOpacity onPress={()=>{}} style={{height:45,width:'30%',backgroundColor:'#252A3E',borderWidth:2,borderColor:'silver',borderRadius:30}}>
                    <Text style={{textAlign:'center',fontSize:15,paddingTop:10,color:'white'}}>Add Items+</Text>
                </TouchableOpacity>
            </View>

            <TerminalCard/>
            
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