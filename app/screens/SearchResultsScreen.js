import React, { useState } from 'react';
import { View, StyleSheet,TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons,AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';


import AppText from '../components/AppText';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppTextInput from '../components/AppTextInput';
import AppHeader from '../components/AppHeader';
import Rating from '../components/Rating';
import AppFilter from '../components/AppFilter';
import ProductCard from '../components/ProductCard';
import colors from '../config/colors';


function SearchResultsScreen({navigation,route}) {
    const {parts} = route.params;
    const {width,height}=useAuth();
    const {theme}=useTheme();
    const [list,setList]=useState(false);
    const [data,setData]=useState(parts);

return (
<View style={styles.container}>
    <AppHeader navigation={navigation} Component={<AppText fontSize={width*0.045} fontFamily={"NunitoExtraBold"}>Search Results</AppText>}/>

    <View style={{flexDirection:'row',width:width,justifyContent:'space-between',alignItems:'center',padding:'5%'}}>
    <AntDesign name={list?"appstore1":"appstore-o"} size={width*0.08} color={theme.primary} onPress={()=>setList(!list)} />
    
    <View style={{width:width*0.5,borderWidth:2,borderColor:theme.primary,flexDirection:'row',borderRadius:5,padding:'1%',justifyContent:'space-between',alignItems:'center'}}>
        <AppText>Make</AppText>
        <MaterialIcons name="keyboard-arrow-down" size={width*0.08} color={theme.primary} />
    </View>
    <AppFilter/>

    </View>

    {!list&&<FlatList
    data={data}
    numColumns={2}
    horizontal={false}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item.part_id}
    renderItem={({ item,index }) => 
    {
      return(
        <ProductCard item={item} navigation={navigation}/>
      )}}
      />}
    {list&&<FlatList
    data={data}
    horizontal={false}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item.part_id}
    renderItem={({ item,index }) => 
    {
      return(
        <TouchableOpacity
        onPress={()=>
            navigation.navigate(routes.MAIN_SEARCH_TAB,{
            screen:routes.DETAILS,
            params:{part:item}
            })
            }
        
        style={{backgroundColor:theme.secondary,width:width*0.98,marginVertical:'1%',borderRadius:10,overflow:'hidden',flexDirection:'row',alignItems:'center'}}>
            <View style={{width:width*0.25,height:width*0.25,margin:'2%'}}>
            <Image style={{width:'100%',height:'100%'}} source={require('../assets/imgs/male_13.jpg')}/>
            </View>
            <View style={{width:width*0.72,padding:'2%'}}>
                <AppText color={theme.secondary=='#fff'?theme.dark:theme.white}>{item.part_name}</AppText>
                <AppText width={'95%'} color={theme.secondary=='#fff'?theme.dark:theme.white} numberOfLines={2} fontSize={width*0.035}>{item.part_description}</AppText>
                <AppText color={colors.secondary} fontFamily={"NunitoExtraBold"} >GH₵ {item.part_price}</AppText>
                <Rating rating={item.part_rating} size={0.7}/>
            </View>
        </TouchableOpacity>
      )}}
      />}
</View>
);
}


export default SearchResultsScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
         alignItems:'center'
        },
        });