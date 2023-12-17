import React from 'react';
import { View, StyleSheet } from 'react-native';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppFeaturedProductsScrow from './AppFeaturedProductsScrow';
import Rating from './Rating';
import AppText from './AppText';

const data = [
    {id:1,},
    {id:2,},
    {id:3,},
]
function Reviews(props) {
    const {width,height}=useAuth();
    const {theme}=useTheme();
return (
<View>
<AppText fontSize={width*0.05} fontFamily={"NunitoSemiBold"} marginLeft='1%'>Reviews</AppText>
        <View style={{height:height*0.18,paddingTop:0,alignItems:'center'}}>
        <AppFeaturedProductsScrow titleOnly={true} disOnly={true}/>
        </View>

        {data.map(item=>{
            return(
        <View key={item.id} style={{width:width*0.98,borderWidth:2,borderColor:theme.primary,borderRadius:10,backgroundColor:theme.secondary,alignSelf:'center',marginVertical:'2%',padding:'2%'}}>
            <View style={{flexDirection:'row',alignItems:'baseline'}}>
                <Rating rating={3.5} size={0.8}/>
                <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.035} marginLeft='2%' color={theme.primary}>(3)</AppText>
            </View>
        <AppText>Starting 2023, BMW 4X4 vehicles will not be manufactured with traffic/turn indicators. Manufacturers argue that if you are rich enough to buy that car, poor people should not be able to know your next move.</AppText>
    </View>

            )
        })}
</View>
);
}

export default Reviews;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});