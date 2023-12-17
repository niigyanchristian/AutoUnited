import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppCarsCard from '../../components/AppCarsCard';
import routes from '../../navigation/routes';


const data= [
    {id:1},
    {id:2},
    {id:3},
    // {id:4},
    // {id:5},
    // {id:6},
]

function CarsScreen({navigation}) {
    const {width,height}= useAuth();
return (
<View style={styles.container}>
    {/* <AppText>Vehicle management Screen</AppText> */}
    <AppHeader Component={<AppText fontFamily='NunitoExtraBold' fontSize={width*0.05}>Cars</AppText>}/>
    <ScrollView style={{flex:1}} contentContainerStyle={{}} showsVerticalScrollIndicator={false}>
        {data.map((item)=>(
        <AppCarsCard key= {item.id}/>
        ))}
    </ScrollView>

    <TouchableOpacity style={{width:width*0.17,height:width*0.17,borderRadius:width*0.17,backgroundColor:colors.secondary,position:'absolute',top:'88%',right:'5%',justifyContent:'center',alignItems:'center'}}
    
    onPress={()=>{
        navigation.navigate(routes.CARS_TAB,{
          screen:routes.ADD_Car,
        //   params: {cat:item.category,cat_name:item.title}
          })
      }}>
    <Entypo name="plus" size={width*0.1} color={colors.primary} />
    </TouchableOpacity>
</View>
);
}

export default CarsScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center'
}
});