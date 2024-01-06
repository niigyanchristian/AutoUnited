import React from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';

const datas = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
]
function AppScrowCard({toggleBgColor=false,data=[]}) {
  const {width} = useAuth();
return (
<ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{gap:20,paddingHorizontal:'2%'}}>
        {data.map((item)=>(
          <View key={item.subcat_id} style={{backgroundColor:!toggleBgColor?colors.secondary:colors.primary,width:width*0.7,borderRadius:width*0.06,padding:width*0.04,overflow:'hidden',elevation:2,marginVertical:'1%'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{width:'20%',backgroundColor:colors.secondary,justifyContent:'center',alignItems:'center',borderRadius:30}}>
            <Image style={{borderRadius:width*0.3,width:width*0.17,height:width*0.17}} source={require('../assets/imgs/pro.png')}/>
            
            </View>
            <View style={{width:'50%'}}>
            <View>
              <AppText fontFamily='NunitoExtraBold' color={!toggleBgColor?colors.primary:colors.dark}>{item.subcat_name}</AppText>
              <AppText marginTop={'3%'} fontSize={width*0.035}  numberOfLines={2}color={!toggleBgColor?colors.primary:colors.dark}>This is where the discription will be </AppText>
            </View>
            </View>
            <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
              <MaterialCommunityIcons name="bookmark-minus-outline" size={width*0.1} color={!toggleBgColor?colors.primary:colors.dark}/>
            </View>
          </View>
        </View>
        ))}
  
        
    </ScrollView>
);
}

export default AppScrowCard;
const styles = StyleSheet.create({

});