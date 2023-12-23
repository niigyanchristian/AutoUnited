import React, { useState } from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';




function AppAdvertScrow(props) {
  const {width} = useAuth();
  // const [color,setColor]=useState('')

  const data = [
    {id:1,title:'Advert 1'},
    {id:2,title:'Advert 2'},
    {id:3,title:'Advert 3'},
    {id:4,title:'Advert 4'},
  
  ]
return (
<ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{gap:5,paddingHorizontal:'2%'}}>
       {data.map((item)=>(
        <View key={item.id} style={{backgroundColor:colors.primary,height:width*0.45,width:width*0.85,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:width*0.03,padding:width*0.02,overflow:'hidden',elevation:2,marginVertical:'0.5%'}}>
          <Image source={require('../assets/imgs/toyota.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}}/>
        </View>
       ))}        
    </ScrollView>
);
}

export default AppAdvertScrow;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
//  alignItems:'center'
}
});