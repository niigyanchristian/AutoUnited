
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity,Image, Platform } from 'react-native';
import { FontAwesome,AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';


import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import AppAdvertScrow from '../components/AppAdvertScrow';
import AppFeaturedProductsScrow from '../components/AppFeaturedProductsScrow';
import routes from '../navigation/routes';
import { useTheme } from '../hooks/ThemeContext';
import colors from '../config/colors';
import AppScrowCard from '../components/AppScrowCard';
import ListsOfProjects from '../components/listsOfProjects';

const data = [
    {id:1,company:'Shell',petrol:'13.58',diesel:'16.28',loc:'0'},
    {id:2,company:'Puma',petrol:'13.58',diesel:'16.28',loc:'1'},
    {id:3,company:'Goil',petrol:'13.58',diesel:'16.28',loc:'2'},
    {id:4,company:'Shell',petrol:'13.58',diesel:'16.28',loc:'3'},
]

const data2 = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
  ]
function MainSearchScreen({navigation}) {
    const {width,height} = useAuth();
    const {theme} =useTheme();
    const [view,setView] =useState(false);

    
return (
<View style={[styles.container,{height:height,backgroundColor:colors.primary}]}>
    {/* Parts */}
    <View style={[styles.header,{width:width,backgroundColor:theme.white}]}>
        <TouchableOpacity 
        // style={{flex:1}}
        onPress={()=>
            navigation.navigate(routes.MAIN_SEARCH_TAB,{
            screen:routes.SEARCH,
            })
            }>
            <FontAwesome name="search" size={width*0.07} color={theme.dark} />
        </TouchableOpacity>

<TouchableOpacity 
onPress={()=>
    navigation.navigate(routes.MAIN_SEARCH_TAB,{
    screen:routes.CATEGORY,
    })
    }
    style={{backgroundColor:colors.grey,alignSelf:'flex-end',borderRadius:15, width:width*0.4,height:height*0.05,justifyContent:'center',alignItems:'center'}}>
    <AppText fontSize={width*0.05} fontFamily={"NunitoExtraBold"}>Category</AppText>

</TouchableOpacity>
<TouchableOpacity 
onPress={()=>
    navigation.navigate(routes.MAIN_SEARCH_TAB,{
    screen:routes.CART,
    })
    }> 
    <AntDesign name="shoppingcart" size={width*0.08} color={theme.dark}/>
    </TouchableOpacity>
    
    </View>

    <ScrollView style={{flex:1,paddingTop:'5%'}} contentContainerStyle={{alignItems:'center',paddingBottom:'5%'}}>
    <View style={{width:'100%',backgroundColor:colors.primaryMedium}}>
    <AppAdvertScrow/>
        </View>    
    
    {/* Featured Products */}
    <View style={{width:width*0.98,padding:'1.5%'}}>
        <AppText fontFamily={"NunitoExtraBold"} fontSize={width*0.055} marginLeft='2%' >Featured Products</AppText>
        {/* <AppFeaturedProductsScrow/> */}
    </View>
    <ListsOfProjects navigation={navigation}/>
    </ScrollView>
</View>
);
}

export default MainSearchScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center'
},
subContainer:{
    flexDirection:'row',justifyContent:'space-between',alignItems:'center',
    borderWidth:1
    // backgroundColor:theme.primary,
},
header:{
    shadowColor: colors.secondary,     // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y) for iOS
    shadowOpacity: 0.5,      // Shadow opacity for iOS
    shadowRadius: 2,         // Shadow radius for iOS
    elevation:(Platform.OS='android')?5:null,            // Elevation for Android (controls shadow)
    padding:'5%',
    paddingVertical:'3%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
}
});