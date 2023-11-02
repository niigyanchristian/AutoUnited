import React from 'react';
import { TouchableOpacity,Image, StyleSheet } from 'react-native';
import AppText from './AppText';
import useAuth from '../auth/useAuth';

function Card({item,XScale=1,YScale=1,TextSize=1}) {
    const {width,h} =useAuth()
return (
<TouchableOpacity
    style={[styles.scrowCard,{backgroundColor:'orange',width:width*0.3*XScale,padding:'1%'}]}
    >
        <Image style={{width:'100%',height:width*0.23*XScale,borderRadius:10,borderWidth:1,borderColor:'#000'}} source={require('../assets/imgs/male_13.jpg')}/>
        <AppText fontSize={width*0.035*TextSize}>{item.title}</AppText>
        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.035*TextSize}>{item.price}</AppText>
    </TouchableOpacity>
);
}

export default Card;
const styles = StyleSheet.create({
    scrowCard:{
        backgroundColor:'blue',
        margin:5,
        marginRight:10,
        borderRadius:10,
        // justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#000'
}
});