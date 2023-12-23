import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import useAuth from '../auth/useAuth';
import routes from '../navigation/routes';
import AppText from './AppText';
import Rating from './Rating';
import colors from '../config/colors';

function ProductCard({navigation,item}) {
    const {width,height}=useAuth();
    const {theme}=useTheme();

return (
<TouchableOpacity style={{backgroundColor:theme.secondary,height:250,width:width*0.45,margin:'2%',padding:'1%',overflow:'hidden'}}
        onPress={()=>
            navigation.navigate(routes.MAIN_SEARCH_TAB,{
            screen:routes.DETAILS,
            params:{part:item}
            })}>
            <Image style={{width:'100%',height:'50%',alignSelf:'center'}} source={require('../assets/imgs/male_13.jpg')}/>
            <View style={{padding:'3%'}}>

            <AppText color={theme.secondary=='#fff'?theme.dark:theme.white} numberOfLines={1} fontFamily={"NunitoExtraBold"}>{item.part_name}</AppText>
            <AppText color={theme.secondary=='#fff'?theme.dark:theme.white} numberOfLines={2} fontSize={width*0.035}>{item.part_description}</AppText>
            <AppText color={colors.secondary} fontSize={width*0.045} fontFamily={"NunitoExtraBold"}>GH₵ {item.part_price}</AppText>
            <View>
            <Rating rating={parseFloat(item.part_rating)}/>
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