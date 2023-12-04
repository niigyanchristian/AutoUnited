import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import Constants from 'expo-constants';
import colors from '../config/colors';
import AppCategoryScrow from '../components/AppCategoryScrow';
import AppText from '../components/AppText';
import CurrentFuelPrices from '../components/CurrentFuelPrices';
import DIdYouKnow from '../components/DIdYouKnow';
import AppAdvertScrow from '../components/AppAdvertScrow';

function HomeScreen(props) {
    const {width,user}=useAuth();

return (
<ScrollView contentContainerStyle={[styles.container,{width:width}]}>
<View style={{flexDirection:'row',alignItems:'center',width:'90%',justifyContent:'space-between',marginTop:'1%'}}>
    <View style={{marginTop:'3%'}}>
        <AppText fontFamily='NunitoSemiBold'>Hello {user.username}👋</AppText>
        <AppText fontSize={width*0.035}>Welcome to <AppText fontFamily='NunitoExtraBold' fontSize={width*0.035}>AutoUnited</AppText></AppText>
    </View>
    <Image style={{height:width*0.15,width:width*0.15,borderRadius:width*0.15}} source={require('../assets/imgs/me.jpg')}/>
    </View>

    

    <View style={{width:'90%',flexDirection:'row',alignItems:'center',backgroundColor:colors.grey,marginTop:'5%',padding:width*0.03,borderRadius:width*0.02}}>
        <Ionicons name="search-outline" size={width*0.07} color={colors.dark} />
        <AppText flex={1} color={colors.mediumDark}>Discover ideas...</AppText>
        <Ionicons name="ios-options-outline" size={width*0.07} color={colors.dark} />
    </View>
    <View style={{width:'100%',marginTop:'5%'}}>
    <AppAdvertScrow/>
    </View>

    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'7%'}}>
        <AppText fontFamily='NunitoExtraBold'>Near me</AppText>
        <AppText color={colors.secondary}>Show All</AppText>
    </View>

    {/* Start Category Scrow */}
    <View style={{width:'100%',marginTop:'5%'}}>
    <AppCategoryScrow/>
    </View>
    {/* End Of Category Scrow */}

    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',marginTop:'5%'}}>
        <AppText fontFamily='NunitoExtraBold'>Current Prices</AppText>
        <AntDesign name="arrowright" size={24} color={colors.secondary} />
    </View>

    {/* Start of AppScrow Card */}
    <View style={{width:'100%',marginTop:'2%'}}>
    <CurrentFuelPrices/>
    </View>
    {/* End of AppScrow Card */}

    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',marginTop:'5%'}}>
        <AppText fontFamily='NunitoExtraBold'>Did You Know?</AppText>
        <AntDesign name="arrowright" size={24} color={colors.secondary} />
    </View>

    {/* Start of DIdYouKnow Card */}
    <View style={{width:'100%',marginTop:'2%',marginBottom:Constants.statusBarHeight}}>
    <DIdYouKnow/>
    </View>
    {/* End of DIdYouKnow Card */}
</ScrollView>
);
}

export default HomeScreen;
const styles = StyleSheet.create({
container:{
backgroundColor:colors.primary,
// justifyContent:'center',
 alignItems:'center',
//  height:'100%'
}
});