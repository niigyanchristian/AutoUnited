import React, { useState } from 'react';
import { View, StyleSheet,TextInput,Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '../hooks/ThemeContext';
import useAuth from '../auth/useAuth';

function AppPasswordInput({onChangeText,onBlur,value,touched,errors}) {
    const [view,setView]=useState(false);
    const {theme}=useTheme();
    const {width,}=useAuth();
return (
    <>
<View style={{borderWidth:2,borderColor:theme.primary,borderRadius:10,padding:'2%',paddingHorizontal:'5%',flexDirection:'row',alignItems:'center',}}>
            <TextInput secureTextEntry={view}
                textContentType='password'
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                touched={touched}
                errors={errors}            
            style={{color:theme.dark,flex:1,fontFamily:"NunitoSemiBold"}}/>
            {view&&<Entypo name="eye" size={width*0.07} color={theme.primary} onPress={()=>setView(false)}/>}
            {!view&&<Entypo name="eye-with-line" size={width*0.07} color={theme.primary} onPress={()=>setView(true)}/>}
        </View> 
     
{touched && errors&&<Text style={{color:'red',marginHorizontal:'5%'}}>{touched && errors}</Text> }
</>
);
}

export default AppPasswordInput;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});