import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import { Ionicons } from '@expo/vector-icons';
import routes from '../navigation/routes';
import useApi from '../hooks/useApi';
import parts from '../api/parts';

function ListsOfProjects({navigation}) {
    const {width} = useAuth();
    const [active,setActive] =useState(false);
  const [data,setData] =useState([]);
  const partsApi = useApi(parts.searchParts);


  
  useEffect(()=>{
    handleSubmit();
  },[])

  const handleSubmit = () => {
    setActive(true);
    partsApi.request('').
    then((response)=>{
      setData(response.data.results)
    }).
    catch((e)=>console.error(e)).
    finally(()=>setActive(false));
};

    const datah=[
        {id:1},
        {id:2},
        {id:3},
        {id:4},
    ]
return (
    <View>
        {data.map((item)=>(
            <TouchableOpacity key={item.part_id} style={{width:'100%',height:width*0.3,flexDirection:'row',alignItems:'center',}}
onPress={()=>{
    navigation.navigate(routes.MAIN_SEARCH_TAB,{
    screen:routes.DETAILS,
    params:{part:item}})
    }}
>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:width*0.24,height:width*0.25,borderRadius:width*0.04}} source={require('../assets/imgs/plug.png')}/>
        </View>
        <View style={{flex:4,padding:'2%'}}>
            <AppText fontFamily='NunitoExtraBold'>{item.part_name}</AppText>
            <AppText fontSize={width*0.04} numberOfLines={2}>{item.part_description}</AppText>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Ionicons name="bookmark" size={width*0.1} color={colors.secondary} />
        </View>
    </TouchableOpacity>
        ))}
    </View>

);
}

export default ListsOfProjects;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});