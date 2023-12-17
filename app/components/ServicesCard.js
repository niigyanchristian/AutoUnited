import React, { useState } from 'react';
import { View, StyleSheet,Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Entypo,Ionicons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import routes from '../navigation/routes';

function ServicesCard({item,navigation}) {
    const {width,height} = useAuth();
    const [follow,setFollow]=useState(false);
    const servicePricings = {
      "Body works": 350,
      "Spraying": 200
    };
    
return (
<View key={item.id} style={{backgroundColor:colors.secondary,width:width*0.95,borderRadius:width*0.03,padding:width*0.03,alignSelf:'center',overflow:'hidden',marginVertical:'2%'}}>
          
          <View style={{flexDirection:'row',backgroundColor:colors.secondaryLight,padding:4,borderRadius:5}}>
          <ImageBackground style={{width:width*0.2,height:width*0.2,justifyContent:'center',alignItems:'center'}} source={require('../assets/imgs/male_13.jpg')}>
          {follow?(
            <Ionicons name="heart-sharp" size={width*0.1} color={colors.primary} onPress={()=>setFollow(false)} />
            ):(
            <Ionicons name="heart-outline" size={width*0.1} color={colors.primary} onPress={()=>setFollow(true)}/> 
          )}
          </ImageBackground>
          <View style={{flex:1,padding:'1%'}}>
            <AppText fontFamily='NunitoExtraBold' color={colors.primary}>{item.company}</AppText>
            {Object.entries(JSON.parse(item.service_pricings)??{key:'value'}).map(([key, value]) => (
              // <AppText >
              //   {`${key}: ${value}`}
              // </AppText>
              <AppText key={key} textAlign='center' color={colors.primary}>{`${key}: GH₵${value}`}</AppText>
            ))}
            
            {/* <AppText textAlign='center' color={colors.primary}>Diesel: GH₵{item.diesel}</AppText> */}
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Entypo name="location-pin" size={width*0.06} color={colors.primary} />
            <AppText color={colors.primary}>{item.distRating}</AppText>
            <AppText color={colors.primary}>Rank</AppText>
          </View>
          </View>
          <TouchableOpacity style={{backgroundColor:colors.primary,width:width*0.25,justifyContent:'center',height:height*0.04,alignItems:'center',borderRadius:width*0.07}}
          
          onPress={()=>{
            navigation.navigate(routes.HOME_TAB,{
                screen:routes.GOOGLE_MAP,
                params: {item:item}
                })
          }}>
            <AppText fontFamily='NunitoExtraBold'>Show Map</AppText>
          </TouchableOpacity>
        </View>
);
}

export default ServicesCard;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});