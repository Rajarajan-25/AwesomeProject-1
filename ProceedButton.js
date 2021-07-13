import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ProceedButton=(props)=>{
    return(
        
        <TouchableOpacity style={styles.buttonStyle}>
     
        <Text style={{color:'white'}}>{props.titleText}</Text>
     
      </TouchableOpacity>
     
    )
}
export default ProceedButton;

const styles=StyleSheet.create({
    buttonStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:40,
        width:'100%',
        borderRadius:20,
        backgroundColor:'#ff5d60',
        marginVertical:'5%'
      }

})