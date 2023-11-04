import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome,AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';


import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import AppAdvertScrow from '../components/AppAdvertScrow';
import AppFeaturedProductsScrow from '../components/AppFeaturedProductsScrow';
import routes from '../navigation/routes';
import { useTheme } from '../hooks/ThemeContext';

const data = [
    {id:1,company:'Shell',petrol:'13.58',diesel:'16.28',loc:'0'},
    {id:2,company:'Puma',petrol:'13.58',diesel:'16.28',loc:'1'},
    {id:3,company:'Goil',petrol:'13.58',diesel:'16.28',loc:'2'},
    {id:4,company:'Shell',petrol:'13.58',diesel:'16.28',loc:'3'},
]
function HomeScreen({navigation}) {
    const {width,height} = useAuth();
    const {theme} =useTheme();
    const [view,setView] =useState(false);

    
return (
<View style={[styles.container,{height:height}]}>
    {/* Parts */}
    <View style={[styles.header,{backgroundColor:theme.white,}]}>
<TouchableOpacity 
style={{flex:1}}
onPress={()=>
    navigation.navigate(routes.HOME_TAB,{
    screen:routes.SEARCH,
    })
    }>
    <FontAwesome name="search" size={width*0.08} color="black" />
</TouchableOpacity>

<TouchableOpacity 
onPress={()=>
    navigation.navigate(routes.HOME_TAB,{
    screen:routes.CATEGORY,
    })
    }
    style={{backgroundColor:theme.secondary,padding:'1%',paddingHorizontal:'2%',borderRadius:15}}>
    <AppText color={theme.white} fontFamily={"PoppinsSemiBold"}>Category</AppText>

</TouchableOpacity>
    <AntDesign name="shoppingcart" size={width*0.08} color="black" />
    </View>

    <ScrollView style={{flex:1}}>
    <AppAdvertScrow/>
    
    {/* Featured Products */}
    <View style={{backgroundColor:theme.primary,height:height*0.29,padding:'1.5%'}}>
        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055} marginLeft='2%' color={theme.white}>Featured Products</AppText>
        <AppFeaturedProductsScrow/>
    </View>
    
    {/*  */}
    <View style={{height:200}}>
        <AppFeaturedProductsScrow TextSize={1.1} YScale={1.5} XScale={1.4}/>
    </View>

    <View style={{width:width*0.98,borderWidth:2,borderColor:theme.primary,borderRadius:10,height:150,backgroundColor:theme.secondary,alignSelf:'center',}}>
        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055} marginLeft='2%' color={theme.primary}>Near Me</AppText>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <MaterialCommunityIcons name="gas-station" size={width*0.15} color={theme.primary} />
            <AppText textAlign={'center'} color={theme.white}>Filling Station</AppText>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <MaterialIcons name="car-repair" size={width*0.15} color={theme.primary} />
            <AppText textAlign={'center'} color={theme.white}>Mechanic Shop</AppText>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        
        <MaterialCommunityIcons name="spray" size={width*0.15} color={theme.primary} />
            <AppText textAlign={'center'} color={theme.white}>Spray Shop</AppText>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <MaterialCommunityIcons name="car-wash" size={width*0.15} color={theme.primary} />
            <AppText textAlign={'center'} color={theme.white}>Washing Bay</AppText>
        </View>
        </View>
    </View>

    <View style={{width:width*0.98,borderWidth:2,borderColor:theme.primary,borderRadius:10,backgroundColor:theme.secondary,alignSelf:'center',marginVertical:'2%',padding:'2%'}}>
    <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055} marginLeft='2%' color={theme.primary}>Current Fuel Prices</AppText>
        <View style={[styles.subContainer,{backgroundColor:theme.primary}]}>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                
                    <AppText textAlign={'center'} color={theme.white}>Company</AppText>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <AppText textAlign={'center'} color={theme.white}>Petrol</AppText>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <AppText textAlign={'center'} color={theme.white}>Diesel</AppText>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <MaterialIcons name="location-pin" size={width*0.07} color={theme.secondary} />
                </View>
        </View>
        {data.slice(0, view?data.length:2).map(item=>{    
        return(
        <View key={item.id} style={styles.subContainer}>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                
                    <AppText textAlign={'center'} color={theme.white}>{item.company}</AppText>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <AppText textAlign={'center'} color={theme.white}>{item.petrol}</AppText>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <AppText textAlign={'center'} color={theme.white}>{item.diesel}</AppText>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <AppText textAlign={'center'} color={theme.white}>{item.loc}</AppText>
                </View>
        </View>
        )})}
       <AppText color={theme.primary} onPress={()=>setView(!view)}>See {view?'less':'more'}...</AppText>
       
    </View>
    <View style={{width:width*0.98,borderWidth:2,borderColor:theme.primary,borderRadius:10,backgroundColor:theme.secondary,alignSelf:'center',marginVertical:'2%',padding:'2%'}}>
    <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055} marginLeft='2%' color={theme.primary}>Did you know?</AppText>
       <View style={{width:'98%',alignSelf:'center',backgroundColor:theme.white,borderRadius:10,padding:'2%',borderWidth:2,borderColor:theme.primary}}>
        <AppText>Starting 2023, BMW 4X4 vehicles will not be manufactured with traffic/turn indicators. Manufacturers argue that if you are rich enough to buy that car, poor people should not be able to know your next move.</AppText>
       </View>
    </View>
    </ScrollView>
</View>
);
}

export default HomeScreen;
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
    backgroundColor: 'red', // Set the background color of the container
    shadowColor: '#000',     // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y) for iOS
    shadowOpacity: 0.5,      // Shadow opacity for iOS
    shadowRadius: 2,         // Shadow radius for iOS
    elevation: 5,            // Elevation for Android (controls shadow)
    // padding: 16,
    padding:'5%',flexDirection:'row',alignItems:'center',
}
});