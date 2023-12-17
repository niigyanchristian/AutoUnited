import React, { useEffect, useState } from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';
import AppText from '../AppText';
import colors from '../../config/colors';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import useAuth from '../../auth/useAuth';
import useApi from '../../hooks/useApi';
import fuel_prices from '../../api/fuel_prices';
import useActiveScreenFunc from '../../hooks/useActiveScreenFunc';
import useLocation from '../../hooks/useLocation';

const data = [
    {id:1,company:'',petrol:'',diesel:'',loc:'0'},
    {id:2,company:'',petrol:'',diesel:'',loc:'1'},
]

function CurrentFuelPricesEmpty(props) {
  const {width,height} = useAuth();
  const [view,setView] =useState(false);
  const [active,setActive] =useState(false);
  // const [data,setData] =useState([]);
  // const fuelPricesApi = useApi(fuel_prices.getFuelPrices);


  
  useEffect(()=>{
    // currentPrices()
  },[])

  

return (
        <View style={{backgroundColor:colors.primaryMedium,width:width*0.9,borderRadius:width*0.03,padding:width*0.04,alignSelf:"center",overflow:'hidden'}}>
          <View style={{flexDirection:'row',backgroundColor:colors.secondaryLight,padding:'2%',borderTopRightRadius:width*0.03,borderTopLeftRadius:width*0.03}}>
            <View style={{flex:2}}>
              <AppText color={colors.primary} fontFamily='NunitoSemiBold'>Company</AppText>
              
            </View>
            <View style={{flex:1}}>
            <AppText color={colors.primary} fontFamily='NunitoSemiBold'>Petrol</AppText>
              
            </View>
            <View style={{flex:1}}>
            <AppText color={colors.primary} fontFamily='NunitoSemiBold'>Diesel</AppText>
             
            </View>
            {/* <View style={{flex:1,alignItems:'center'}}>
            <MaterialIcons name="location-pin" size={width*0.07} color={colors.primary} /> 
            </View> */}
          </View>
          {data.slice(0, view?data.length:2).map((item)=>(
          <View key={item.id} style={{flexDirection:'row',borderWidth:1,borderColor:colors.secondaryLight,padding:4}}>
            <View style={{flex:2}}>
              <AppText color={colors.primary} fontSize={width*0.035}>{item.company}</AppText>
            </View>
            <View style={{flex:1}}>
              <AppText color={colors.primary} fontSize={width*0.035}>{item.petrol}</AppText>
            </View>
            <View style={{flex:1}}>
              <AppText color={colors.primary} fontSize={width*0.035}>{item.diesel}</AppText>
            </View>
          </View>

          ))}
          <View style={{width:width*0.25,height:height*0.02,marginTop:'1%',backgroundColor:colors.secondaryLight}}></View>
        </View>
  
        
    // </ScrollView>
);
}

export default CurrentFuelPricesEmpty;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
//  alignItems:'center'
}
});