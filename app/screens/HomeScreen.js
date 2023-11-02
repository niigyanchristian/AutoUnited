import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome,AntDesign } from '@expo/vector-icons';


import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import AppAdvertScrow from '../components/AppAdvertScrow';
import AppFeaturedProductsScrow from '../components/AppFeaturedProductsScrow';
import routes from '../navigation/routes';
function HomeScreen({navigation}) {
    const {width,height} = useAuth();
return (
<View style={[styles.container,{height:height}]}>
    {/* Parts */}
    <View style={{padding:'5%',flexDirection:'row',alignItems:'center',backgroundColor:'orange',}}>
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
    style={{backgroundColor:'red',padding:'1%',paddingHorizontal:'2%',borderRadius:15}}>
    <AppText fontFamily={"PoppinsSemiBold"}>Category</AppText>

</TouchableOpacity>
    <AntDesign name="shoppingcart" size={width*0.08} color="black" />
    </View>

    <ScrollView contentContainerStyle={{flex:1}}>
    <AppAdvertScrow/>
    
    {/* Featured Products */}
    <View style={{backgroundColor:"#000",height:height*0.29,padding:'1.5%'}}>
        <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055} marginLeft='2%' color='#fff'>Featured Products</AppText>
        <AppFeaturedProductsScrow/>
    </View>
    
    {/*  */}
    <View style={{backgroundColor:"#ffbb",flex:1}}>
        <AppFeaturedProductsScrow TextSize={1.5} YScale={1.8} XScale={1.6}/>
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
}
});