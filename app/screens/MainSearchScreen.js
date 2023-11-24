
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
function MainSearchScreen({navigation}) {
    const {width,height} = useAuth();
    const {theme} =useTheme();
    const [view,setView] =useState(false);

    
return (
<View style={[styles.container,{height:height,backgroundColor:theme.secondary}]}>
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
    style={{backgroundColor:theme.primary,padding:'1%',alignSelf:'flex-end',paddingHorizontal:'2%',borderRadius:15}}>
    <AppText color={theme.white} fontFamily={"PoppinsSemiBold"}>Category</AppText>

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

    <ScrollView style={{flex:1}}>
    <AppAdvertScrow/>
    
    {/* Featured Products */}
    <View style={{height:height*0.29,padding:'1.5%'}}>
        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055} marginLeft='2%' >Featured Products</AppText>
        <AppFeaturedProductsScrow/>
    </View>
    
    <View style={{height:200}}>
        <AppFeaturedProductsScrow TextSize={1.1} YScale={1.5} XScale={1.4}/>
    </View>



   
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
    shadowColor: '#000',     // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y) for iOS
    shadowOpacity: 0.5,      // Shadow opacity for iOS
    shadowRadius: 2,         // Shadow radius for iOS
    elevation: 5,            // Elevation for Android (controls shadow)
    padding:'5%',
    paddingVertical:'3%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
}
});