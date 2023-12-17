import React, { useState } from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import routes from '../navigation/routes';




function AppCategoryScrow({navigation}) {
  const {width} = useAuth();
  // const [color,setColor]=useState('')

  const data = [
    {id:1,title:'Filling station',Icon:<MaterialCommunityIcons name="gas-station" size={width*0.1} color={'#fff'} />,category:'103'},
    {id:2,title:'Mechanic shop',Icon:<MaterialIcons name="car-repair" size={width*0.1} color={colors.secondary} />,category:'102'},
    {id:3,title:'Spray shop',Icon:<MaterialCommunityIcons name="spray" size={width*0.1} color={colors.secondary} />,category:'105'},
    {id:4,title:'Washing bay',Icon:<MaterialCommunityIcons name="car-wash" size={width*0.1} color={colors.secondary} />,category:'104'},
    {id:5,title:'Parts shop',Icon:<MaterialCommunityIcons name="hammer-screwdriver" size={width*0.1} color={colors.secondary} />,category:'101'},
    {id:6,title:'Vehicle company office',Icon:<MaterialCommunityIcons name="car-wash" size={width*0.1} color={colors.secondary} />,category:'201'},
    {id:7,title:'Vehicle company affiliated shop',Icon:<MaterialCommunityIcons name="car-wash" size={width*0.1} color={colors.secondary} />,category:'203'},
    {id:8,title:'Vehicle Insurance',Icon:<MaterialCommunityIcons name="car-wash" size={width*0.1} color={colors.secondary} />,category:'203'},
  
  ]
return (
<ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{gap:10,paddingHorizontal:'2%'}}>
       {data.map((item)=>(
        <TouchableOpacity key={item.id} style={{backgroundColor:item.id==1?colors.secondary:colors.primary,minHeight:width*0.17,minWidth:width*0.5,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:width*0.1,padding:width*0.02,overflow:'hidden',elevation:2,marginVertical:'0.5%'}}
        
        onPress={()=>{
          navigation.navigate(routes.HOME_TAB,{
            screen:routes.SERVICES,
            params: {cat:item.category,cat_name:item.title}
            })
        }}
        >
          {item.Icon}
         <AppText color={item.id==1?colors.primary:colors.secondary} marginRight={width*0.03}>{item.title}</AppText>
        </TouchableOpacity>
       ))}
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