import React from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import AppText from './AppText';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import colors from '../config/colors';

function AppButton({text,active=false,textColor='#fff',onPress,...others}) {
    const {theme} = useTheme();
    const {width} = useAuth();
return (
<TouchableOpacity style={[styles.box,{backgroundColor:colors.secondary,...others}]} onPress={onPress}>
    {!active&&<AppText fontSize={width*0.045} fontFamily={"NunitoSemiBold"} color={textColor}>{text}</AppText>}
    {active&&<ActivityIndicator color={"#fff"} size={width*0.07}/>}
    </TouchableOpacity>
);
}

export default AppButton;
const styles = StyleSheet.create({
box:{
    justifyContent:'center',
    alignItems:'center',
    padding:'4%',
    width:'100%',
    // margin:'2%',
    borderRadius:10
}
});