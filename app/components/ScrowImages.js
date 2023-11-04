import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';


const data = [
    {id:1,img:require('../assets/imgs/male_13.jpg')},
    {id:2,img:require('../assets/imgs/male_13.jpg')},
    {id:3,img:require('../assets/imgs/male_13.jpg')},
    {id:4,img:require('../assets/imgs/male_13.jpg')},
]
function ScrowImages(props) {
    const {width,height} = useAuth();
    const {theme}=useTheme();
return (
    <View style={{height:height*0.3}}>
<ScrollView 
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={{marginVertical:'2%'}}>
{data.map(item=>{
        
        return(
            <View key={item.id} style={{width:width*0.7,marginHorizontal:10,borderRadius:10,borderWidth:2,borderColor:theme.secondary,overflow:'hidden'}} >
            <Image style={{width:'100%',height:'100%'}} source={item.img}/>
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