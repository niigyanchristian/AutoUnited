import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import useAuth from '../auth/useAuth';
import routes from '../navigation/routes';
import AppText from './AppText';
import Rating from './Rating';

function ProductCard({navigation,item}) {
    const {width,height}=useAuth();
    const {theme}=useTheme();
return (
<TouchableOpacity style={{backgroundColor:theme.secondary,height:250,width:width*0.45,margin:'2%',padding:'1%',overflow:'hidden'}}
        onPress={()=>
            navigation.navigate(routes.MAIN_SEARCH_TAB,{
            screen:routes.DETAILS,
            })
            }
        >
            <Image style={{width:'100%',height:'50%',alignSelf:'center'}} source={item.img}/>
            <View style={{padding:'3%'}}>

            <AppText color={theme.white}>{item.shopName}</AppText>
            <AppText color={theme.white} numberOfLines={2} fontSize={width*0.035}>{item.discription}</AppText>
            <AppText color={theme.white} fontSize={width*0.045} fontFamily={"PoppinsSemiBold"}>GH₵ {item.price}</AppText>
            <View>
            <Rating rating={item.rate}/>
            </View>
            </View>
        </TouchableOpacity>
);
}

export default ProductCard;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});