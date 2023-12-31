import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppCarsCard from '../../components/AppCarsCard';
import routes from '../../navigation/routes';
import useApi from '../../hooks/useApi';
import carsApi from '../../api/cars';
import usecart from '../../auth/usecart';
import useActiveScreenFunc from '../../hooks/useActiveScreenFunc';


function CarsScreen({navigation}) {
    const {width,user}= useAuth();
    const getMyCarsApi = useApi(carsApi.getMyCars);
    const [data,setData]=useState([]);
    const [items,setItems]=useState([]);

    const getFunc = async () => {
      setItems(await usecart.getCart());
    };
  useActiveScreenFunc().FocusedAndBlur(()=>getFunc(),()=>null)

    useEffect(() => {
        handleSubmit()
      }, []);

    const handleSubmit=()=>{
        getMyCarsApi.request(user.token).
        then((data)=>{
          console.log("=>",data.data)
            if(data.status=='200'){
                setData(data.data.results)
            }
        })
    }
return (
<View style={styles.container}>
    {/* <AppText>Vehicle management Screen</AppText> */}
    <AppHeader Component={<AppText fontFamily='NunitoExtraBold' fontSize={width*0.05}>Cars</AppText>} cartCount={items.length}/>
    <ScrollView style={{flex:1}} contentContainerStyle={{}} showsVerticalScrollIndicator={false}>
        {data.map((item,index)=>(
        <AppCarsCard key= {index} onPress={()=>{
            navigation.navigate(routes.CARS_TAB,{
              screen:routes.CAR_DETAIL,
              params: {item:item}
              })
          }}/>
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