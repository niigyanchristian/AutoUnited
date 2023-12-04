import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, ScrollView } from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import { Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import usersApi from '../api/users'

import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';
import AppPasswordInput from '../components/AppPasswordInput';
import useApi from '../hooks/useApi';

const ReviewSchema = yup.object({
    username: yup.string().min(2).label("Name").required(),
    user_phone: yup.number().min(10).label("Contact").required(),
    user_password: yup.string().min(6).label("Password").required()
  })

function SignUpScreen({navigation}) {
    const {width,height,logIn}=useAuth();
    const {theme}=useTheme();
    const [view,setView]=useState(false);
    const registerApi = useApi(usersApi.register);
    const [active,setActive]=useState(false);


    const handleSubmit = async (values) => {
    
        let data = {
            username: values.username.trim(),
            user_phone: values.user_phone.trim(),
            user_password: values.user_password.trim()
        }
        
    
        const result = await registerApi.request(data);
    
        if (!result.ok) {
            alert(result.data.errMsg)
            setActive(false)
            return;
        } else {
            logIn(result.data.results)
            setActive(false)
        }
    };
return (
    <ImageBackground style={styles.container} 
source={require('../assets/imgs/splash.png')}>
    <ScrollView style={{flex:1}}>
    <View style={{height:height*0.25,width:width,justifyContent:'flex-end',alignItems:'flex-start',padding:'5%'}}>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.1} color={theme.white}>Welcome</AppText>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.04} color={theme.white}>Register to continue</AppText>
    </View>
    <Formik
          initialValues={{username:"",user_phone:"",user_password:""}}
          validationSchema={ReviewSchema}
          onSubmit={async (values,actions)=>{
                setActive(true);
                handleSubmit(values)
        }}
        >
        {(props)=>(
            <Animatable.View animation="fadeInUp" duration={2000} delay={500} style={{backgroundColor:theme.white,width:width,height:height*0.6,padding:'5%',marginTop:height*0.15}}>
            <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.05} color={theme.primary}>Username</AppText>
            <AppTextInput 
            onChangeText={props.handleChange('username')}
            onBlur={props.handleBlur('username')}
            value={props.values.username}
            touched={props.touched.username}
            errors={props.errors.username}/>
        
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.05} color={theme.primary} marginTop='5%'>Phone Number</AppText>
        <AppTextInput 
            onChangeText={props.handleChange('user_phone')}
            onBlur={props.handleBlur('user_phone')}
            value={props.values.user_phone}
            keyboardType='numeric'
            touched={props.touched.user_phone}
            errors={props.errors.user_phone}/>

        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.055} color={theme.primary} marginTop='5%'>Password</AppText>
        
        
        <AppPasswordInput
        onChangeText={props.handleChange('user_password')}
        onBlur={props.handleBlur('user_password')}
        value={props.values.user_password}
        touched={props.touched.user_password}
        errors={props.errors.user_password}
        />
        <AppButton text={'Login'} alignSelf='center' backgroundColor={theme.primary} textColor={theme.secondary}
        active={active}
        onPress={props.handleSubmit} marginTop='5%'/>

        
      
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
        <AppText textDecorationLine='underline' color={theme.primary} fontFamily={"NunitoSemiBold"} fontSize={width*0.045} onPress={()=>navigation.navigate(routes.SIGN_IN)}>Sign In</AppText>
        <AppText textDecorationLine='underline' color={theme.primary} fontFamily={"NunitoSemiBold"} fontSize={width*0.045}>Forgot Password</AppText>
        </View>      
    </Animatable.View>

)}</Formik>
</ScrollView>
</ImageBackground>
);
}

export default SignUpScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'space-between',
 alignItems:'center'
}
});