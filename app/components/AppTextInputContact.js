import React, { useState } from 'react';
import { Dimensions,View, StyleSheet, TextInput,Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome,MaterialIcons,AntDesign } from '@expo/vector-icons';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';


function AppTextInputContact({ onChangeText, value, placeholder, onBlur, touched, errors }) {
    const {width} =useAuth();
return (
  <>
<View style={[styles.scrowCard,{padding:'2%'}]}>
<Image source={require('../assets/imgs/ghana.png')} style={{height:width*0.08,width:width*0.10,borderRadius:5}}/>
<FontAwesome name="caret-down" size={24} color={'#bdbcbc'} style={{margin:5}}/>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        touched={touched}
        placeholder={placeholder}
        keyboardType={'numeric'}
        style={{flex:1,color:colors.dark,fontFamily:"NunitoSemiBold",fontSize:width*0.04,marginLeft:5}}
        spellCheck={false}
      />
      
      </View>
      <Text style={{color:'red'}}>{touched && errors}</Text>
      </>
);
}

export default AppTextInputContact;
const styles = StyleSheet.create({
    scrowCard:{
        width:'100%',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        borderColor:colors.secondary,
        backgroundColor:'#eee',
        marginVertical:5,
        borderWidth:2,
    }
});