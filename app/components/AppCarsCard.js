import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import AppText from './AppText';

function AppCarsCard(props) {
    const {width,height}=useAuth();
return (
<View style={{ width:width*0.95,backgroundColor:colors.primary,borderRadius:width*0.05,flexDirection:'row',overflow:'hidden',marginVertical:'2%'}}>
            <View style={{width:width*0.3,height:width*0.3}}>
            <Image source={require('../assets/imgs/toyota.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}/>
            </View>
            <View style={{flex:1,padding:'5%',justifyContent:'center'}}>
                <AppText fontFamily='NunitoExtraBold' fontSize={width*0.045} numberOfLines={1}>Toyota</AppText>
                <AppText fontSize={width*0.035}>GT-2023-23</AppText>
            </View>
        </View>
);
}

export default AppCarsCard;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});