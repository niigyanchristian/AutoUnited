import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function SignInScreen({navigation}) {
    const {width,height}=useAuth();
    const {theme}=useTheme();
    const [view,setView]=useState(false);
return (
<ImageBackground style={styles.container} 
source={require('../assets/imgs/pic2.png')}>
    <View style={{height:height*0.25,width:width,justifyContent:'flex-end',alignItems:'flex-start',padding:'5%'}}>
        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.1} color={theme.white}>Welcome</AppText>
        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.04} color={theme.white}>Sign in to continue</AppText>
    </View>
    <Animatable.View animation="fadeInUp" duration={2000} delay={500} style={{backgroundColor:theme.white,width:width,height:height*0.53,padding:'5%'}}>
        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055} color={theme.primary}>Email address</AppText>
        <View style={{borderWidth:2,borderColor:theme.primary,borderRadius:10,padding:'2%',paddingHorizontal:'5%',marginBottom:'5%'}}>
            <TextInput placeholder='' style={{color:theme.primary,fontFamily:"PoppinsSemiBold"}}/>
        </View>

        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055} color={theme.primary}>Password</AppText>
        <View style={{borderWidth:2,borderColor:theme.primary,borderRadius:10,padding:'2%',paddingHorizontal:'5%',flexDirection:'row',alignItems:'center',marginBottom:'5%'}}>
            <TextInput secureTextEntry={view} style={{color:theme.primary,flex:1,fontFamily:"PoppinsSemiBold"}}/>
            {view&&<Entypo name="eye" size={width*0.07} color={theme.primary} onPress={()=>setView(false)}/>}
            {!view&&<Entypo name="eye-with-line" size={width*0.07} color={theme.primary} onPress={()=>setView(true)}/>}
        </View>  
        
        <AppButton text={'Login'} alignSelf='center'/>
      
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
        <AppText textDecorationLine='underline' color={theme.primary} fontFamily={"PoppinsSemiBold"} fontSize={width*0.045} onPress={()=>navigation.navigate(routes.SIGN_UP)}>Sign up</AppText>
        <AppText textDecorationLine='underline' color={theme.primary} fontFamily={"PoppinsSemiBold"} fontSize={width*0.045}>Forgot Password</AppText>
        </View>      
    </Animatable.View>
</ImageBackground>
);
}

export default SignInScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'space-between',
 alignItems:'center'
}
});