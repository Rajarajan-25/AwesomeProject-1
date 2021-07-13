import React from 'react';
import {View, KeyboardAvoidingView, Text, StyleSheet,} from 'react-native';
import InputPhoneNumber from '../baseComponents/inputs/InputPhoneNumber';
import ProfileImageContainer from '../baseComponents/inputs/ProfileImageContainer';
import images from '../resources/images'
import fonts from '../resources/fonts'
import ProceedButton from '../baseComponents/ProceedButton';
const LoginScreen=()=>{
return(
    <KeyboardAvoidingView behavior='height' style={styles.screen}>
        <View style={styles.container}>
        <ProfileImageContainer imageSource={images.haircutProfile} />
        
        
        <InputPhoneNumber maximumDigits={10} title="MOBILE NUMBER"/>
        
        <ProceedButton titleText="SUBMIT"/>
        
        </View>
    </KeyboardAvoidingView>
)
}
export default LoginScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f0f0f0',
        padding:"4%"
    },
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'white',
        paddingTop:'20%',
        alignItems:'center',
        padding:'4%'               
    },
    
    
    
})