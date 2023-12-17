import React, { useEffect, useState } from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import did_you_know from '../api/did_you_know';
import DIdYouKnowEmpty from './empty/DIdYouKnowEmpty';

function DIdYouKnow(props) {
  const {width} = useAuth();
  const [active,setActive] =useState(false);
  const [data,setData] =useState('');
  const didYouKnowApi = useApi(did_you_know.didYouKnow);


  
  useEffect(()=>{
    handleSubmit();
  },[])

  const handleSubmit = () => {
    setActive(true);
    didYouKnowApi.request().
    then((response)=>{
      setData(response.data.results)
    }).
    catch((e)=>console.error(e)).
    finally(()=>setActive(false));
};

if (active){
  return(
    <DIdYouKnowEmpty/>
  )
}

return (

        <View style={{backgroundColor:colors.secondary,width:width*0.9,borderRadius:width*0.03,padding:width*0.04,alignSelf:'center',overflow:'hidden'}}>
          
          <View style={{flexDirection:'row',backgroundColor:colors.secondaryLight,padding:4,borderRadius:5}}>
          <AppText color={colors.primary}>{data}</AppText>
          </View>
        </View>
);
}

export default DIdYouKnow;
const styles = StyleSheet.create({

});