import React from 'react';
import { TouchableOpacity,Image, StyleSheet } from 'react-native';
import AppText from './AppText';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';

function Card({item,XScale=1,YScale=1,TextSize=1,titleOnly=false,disOnly=false}) {
    const {width,h} =useAuth();
    const {theme} = useTheme();
    
return (
<TouchableOpacity
    style={[styles.scrowCard,{backgroundColor:theme.white,width:width*0.3*XScale,padding:'1%',borderColor:theme.primary}]}
    >
        <Image style={{width:'100%',height:width*0.23*XScale,borderRadius:10,borderWidth:1,borderColor:theme.primary}} source={require('../assets/imgs/male_13.jpg')}/>
        {!disOnly&&<AppText fontSize={width*0.035*TextSize}>{item.title}</AppText>}
        {!titleOnly&&<AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.035*TextSize}>{item.price}</AppText>}
    </TouchableOpacity>
);
}

export default Card;
const styles = StyleSheet.create({
    scrowCard:{
        margin:5,
        marginRight:10,
        borderRadius:10,
        // justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        elevation:3,
        shadowOffset:{
          width:1,
          height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
}
});