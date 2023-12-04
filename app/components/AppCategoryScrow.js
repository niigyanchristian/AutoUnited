import React, { useState } from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';




function AppCategoryScrow(props) {
  const {width} = useAuth();
  // const [color,setColor]=useState('')

  const data = [
    {id:1,title:'Filling station',Icon:<MaterialCommunityIcons name="gas-station" size={width*0.1} color={'#fff'} />},
    {id:2,title:'Mechanic shop',Icon:<MaterialIcons name="car-repair" size={width*0.1} color={colors.secondary} />},
    {id:3,title:'Spray shop',Icon:<MaterialCommunityIcons name="spray" size={width*0.1} color={colors.secondary} />},
    {id:4,title:'Washing bay',Icon:<MaterialCommunityIcons name="car-wash" size={width*0.1} color={colors.secondary} />},
  
  ]
return (
<ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{gap:30,paddingHorizontal:15}}>
       {data.map((item)=>(
        <View key={item.id} style={{backgroundColor:item.id==1?colors.secondary:colors.grey,height:width*0.17,width:width*0.5,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:width*0.1,padding:width*0.02,overflow:'hidden',elevation:2,marginBottom:'1%'}}>
          {/* <Image style={{width:width*0.19,height:width*0.19,marginTop:'10%'}} source={require('../assets/imgs/cat/tractor.png')}/> */}
          {item.Icon}
         <AppText color={item.id==1?colors.primary:colors.secondary} marginRight='8%'>{item.title}</AppText>
        </View>
       ))}
        {/* <View style={{backgroundColor:colors.grey,height:width*0.17,width:width*0.5,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:width*0.1,padding:width*0.02,overflow:'hidden'}}>
          <Image style={{width:width*0.19,height:width*0.19,marginTop:'6%'}} source={require('../assets/imgs/cat/rocket.png')}/>
         <AppText marginRight='8%'>Startups</AppText>
        </View> */}
        {/* <View style={{backgroundColor:colors.grey,height:width*0.17,width:width*0.5,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:width*0.1,padding:width*0.02,overflow:'hidden'}}>
          <Image style={{width:width*0.15,height:width*0.15,marginTop:'5%'}} source={require('../assets/imgs/cat/home.png')}/>
         <AppText>Real Estate</AppText>
        </View> */}
  
        
    </ScrollView>
);
}

export default AppCategoryScrow;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
//  alignItems:'center'
}
});