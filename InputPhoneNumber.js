import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import fonts from '../../resources/fonts';
const InputPhoneNumber=(props)=>{
    return(
        <View style={styles.container}>
        <Text style={{paddingLeft:'2%', fontFamily:fonts.gothamMedium}}>{props.title}</Text>
        <TextInput style={styles.mobileNum}
            maxLength={props.maximumDigits}
     keyboardType='number-pad'
     />
     </View>
    )
}
export default InputPhoneNumber;

const styles=StyleSheet.create({
    container:{
        width:'100%',
        marginTop:'15%'
    },
    mobileNum:{
        height:40,
        width:'100%',
        borderRadius:20,
        backgroundColor:'#f2f2f2',
        marginVertical:'5%',
        fontSize:15,
        position:'relative',
        marginTop:'7%'
      }
})