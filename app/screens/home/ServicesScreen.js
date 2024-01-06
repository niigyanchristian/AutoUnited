import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';


import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import ServicesCard from '../../components/ServicesCard';
import useApi from '../../hooks/useApi';
import near_me from '../../api/near_me';

const datad = [
    {id:1,company:'Shell',petrol:'13.58',diesel:'16.28',loc:'0',img:require('../../assets/imgs/male_13.jpg')},
    {id:2,company:'Puma',petrol:'13.58',diesel:'16.28',loc:'1',img:require('../../assets/imgs/male_13.jpg')},
    {id:3,company:'Goil',petrol:'13.58',diesel:'16.28',loc:'2',img:require('../../assets/imgs/male_13.jpg')},
    {id:4,company:'Shell',petrol:'13.58',diesel:'16.28',loc:'3',img:require('../../assets/imgs/male_13.jpg')},
]

function ServicesScreen({route,navigation}) {
    const {cat,cat_name} = route.params;
    const {width,height} =useAuth();

    const [active,setActive] =useState(false);
    const [data,setData] =useState([]);
    const nearMeApi = useApi(near_me.nearMe);
  
  
    
    useEffect(()=>{
        handleSubmit()
    },[])
    
  
    const handleSubmit = () => {
        setActive(true);
        useLocation().getLocation().
        then(
        (loc)=>{
        return nearMeApi.request(`?service_code=${cat}&long=${loc.longitude}&lat=${loc.latitude}`)},
        (e)=>alert('Unable to retrieve your location. Please check if your device location is turned on')).
        then((response)=>{
        setData(response.data.results);
        }).catch((e)=>{
        console.error(e);
        })
    };

    // console.log(data[4].service_pricings);
return (
<ScrollView contentContainerStyle={styles.container} style={{flex:1}}>
    <AppHeader Component={<AppText fontFamily='NunitoExtraBold' fontSize={width*0.055}>{cat_name}</AppText>}/>

    {data.slice(0,1).map((item)=>(
    <ServicesCard key={item.shop_id} item={item} navigation={navigation}/>
    ))}

    <View style={{width:width*0.9,height:height*0.05,justifyContent:'center'}}>
    <AppText fontSize={width*0.05} numberOfLines={1} fontFamily='NunitoExtraBold' color={colors.darkGrey}>Others close by in of nearness</AppText>
    </View>
    {data.map((item)=>(
    <ServicesCard key={item.shop_id} item={item} navigation={navigation}/>
    ))}
</ScrollView>
);
}

export default ServicesScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center'
}
});