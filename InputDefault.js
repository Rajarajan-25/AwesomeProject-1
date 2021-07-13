import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import fonts from '../../resources/fonts';
const InputDefault=(props)=>{
    return(
        <View style={styles.container}>
        <Text style={{paddingLeft:'2%', fontFamily:fonts.gothamMedium}}>{props.title}</Text>
        <TextInput style={styles.mobileNum}
            maxLength={props.maximumDigits}
            keyboardType={props.typeOfKeyboard}
     />
     </View>
    )
}
export default InputDefault;