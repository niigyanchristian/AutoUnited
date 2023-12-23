import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import colors from '../config/colors';


const data = [
    {id:1,img:require('../assets/imgs/plug.png')},
    {id:2,img:require('../assets/imgs/plug.png')},
    {id:3,img:require('../assets/imgs/plug.png')},
    {id:4,img:require('../assets/imgs/plug.png')},
]
function ScrowImages(props) {
    const {width,height} = useAuth();
    const {theme}=useTheme();
return (
    <View style={{}}>
<ScrollView 
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={{marginVertical:'2%',columnGap:20,paddingHorizontal:'2%'}}>
{data.map(item=>{
        
        return(
            <View key={item.id} style={{width:width*0.6,height:width*0.45,borderRadius:10,borderWidth:2,borderColor:theme.secondary,overflow:'hidden',backgroundColor:colors.primary}} >
            <Image style={{width:'100%',height:'100%',resizeMode:'contain'}} source={item.img}/>
            </View>
        )})}
</ScrollView>
</View>
);
}

export default ScrowImages;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});