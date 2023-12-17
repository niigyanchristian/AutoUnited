import React, { useEffect, useState } from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import fuel_prices from '../api/fuel_prices';
import useActiveScreenFunc from '../hooks/useActiveScreenFunc';
import useLocation from '../hooks/useLocation';
import CurrentFuelPricesEmpty from './empty/CurrentFuelPricesEmpty';

const datas = [
    {id:1,company:'Shell',petrol:'13.58',diesel:'16.28',loc:'0'},
    {id:2,company:'Puma',petrol:'13.58',diesel:'16.28',loc:'1'},
    {id:3,company:'Goil',petrol:'13.58',diesel:'16.28',loc:'2'},
    {id:4,company:'Shell',petrol:'13.58',diesel:'16.28',loc:'3'},
]

function CurrentFuelPrices(props) {
  const {width,user} = useAuth();
  const [view,setView] =useState(false);
  const [active,setActive] =useState(false);
  const [data,setData] =useState([]);
  const fuelPricesApi = useApi(fuel_prices.getFuelPrices);


  
  useEffect(()=>{
    currentPrices()
  },[])

  const currentPrices = async () => {
    setActive(true);
    useLocation().getLocation().
    then(
      (loc)=>{
      return fuelPricesApi.request(`?lat=${loc.latitude}&long=${loc.longitude}`)},
      (e)=>alert('Unable to retrieve your location. Please check if your device location is turned on')).
    then((response)=>{
      setData(response.data.results);
    }).catch((e)=>{
      console.error(e);
    }).finally(()=>setActive(false))
};



if(active){
  return <CurrentFuelPricesEmpty/>
}

return (
        <View style={{backgroundColor:colors.secondary,width:width*0.9,borderRadius:width*0.03,padding:width*0.04,alignSelf:"center",overflow:'hidden'}}>
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
          <View key={item.shop_id} style={{flexDirection:'row',borderWidth:1,borderColor:colors.secondaryLight,padding:4}}>
            <View style={{flex:2}}>
              <AppText color={colors.primary} fontSize={width*0.035}>{item.shop_name}</AppText>
            </View>
            <View style={{flex:1}}>
              <AppText color={colors.primary} fontSize={width*0.035}>{item.super}</AppText>
            </View>
            <View style={{flex:1}}>
              <AppText color={colors.primary} fontSize={width*0.035}>{item.diesel}</AppText>
            </View>
            {/* <View style={{flex:1,alignItems:'center'}}>
              <AppText color={colors.primary} fontSize={width*0.035}>{item.loc}</AppText>
            </View> */}
          </View>

          ))}
          <AppText color={colors.primary} onPress={()=>setView(!view)}>See {view?'less':'more'}...</AppText>
        </View>
  
        
    // </ScrollView>
);
}

export default CurrentFuelPrices;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
//  alignItems:'center'
}
});