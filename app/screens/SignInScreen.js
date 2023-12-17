import React, { useState } from 'react';
import { View, StyleSheet, Image,ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import * as yup from 'yup';
import authApi from '../api/auth';

import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';
import AppPasswordInput from '../components/AppPasswordInput';
import colors from '../config/colors';


const ReviewSchema = yup.object({
    username: yup.string().min(2).label("Name").required(),
    // phoneNumber: yup.number().min(10).label("Contact").required(),
    user_password: yup.string().min(6).label("Password").required()
  })


function SignInScreen({navigation}) {
    const {width,height,logIn}=useAuth();
    const {theme}=useTheme();
    const [active,setActive]=useState(false);


    const handleSubmit = async (values) => {
    
        let data = {
            username: values.username.trim(),
            user_phone: values.user_phone.trim(),
            user_password: values.user_password.trim()
        }
        
    
        const result = await authApi.login(data);
    
        if (!result.ok) {
            setActive(false)
            return;
        } else {
            setActive(false)
            logIn(result.data.results)
        }
    };
    
    
    
return (
<View style={styles.container} 
// source={require('../assets/imgs/splash.png')}
>
<ScrollView style={{flex:1}}>
    <View style={{height:height*0.4,width:width,justifyContent:'flex-end',alignItems:'flex-start',padding:'5%'}}>
        <View style={{width:width*0.6,height:width*0.25,alignSelf:'center',alignItems:'center',justifyContent:'center',overflow:'hidden',marginBottom:'5%'}}>
        <Image source={require('../assets/imgs/logo6.png')} style={{width:width*0.7,height:width*0.7,}}/>

        </View>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.1} color={theme.white}>Welcome</AppText>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.04} color={theme.white}>Sign in to continue</AppText>

        
    </View>
    <Formik
          initialValues={{username:"",user_phone:"",user_password:""}}
          validationSchema={ReviewSchema}
          onSubmit={async (values,actions)=>{
            setActive(true)
            handleSubmit(values)
        
        }}
          >
            {(props)=>(
    <Animatable.View animation="fadeInUp" duration={2000} delay={500} style={{backgroundColor:theme.white,width:width,height:height*0.53,marginTop:height*0.07,padding:'5%'}}>

        
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.055} color={theme.primary}>Username</AppText>
        <AppTextInput 
        onChangeText={props.handleChange('username')}
        onBlur={props.handleBlur('username')}
        value={props.values.username}
        touched={props.touched.username}
        errors={props.errors.username}/>

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
        <AppText textDecorationLine='underline' color={theme.primary} fontFamily={"NunitoSemiBold"} fontSize={width*0.045} onPress={()=>navigation.navigate(routes.SIGN_UP)}>Sign up</AppText>
        <AppText textDecorationLine='underline' color={theme.primary} fontFamily={"NunitoSemiBold"} fontSize={width*0.045}>Forgot Password</AppText>
        </View>  
    </Animatable.View>
             )}</Formik>
             </ScrollView>
</View>
);
}

export default SignInScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'space-between',
 alignItems:'center',
 backgroundColor:colors.secondary
}
});