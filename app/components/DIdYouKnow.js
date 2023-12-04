import React from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';

function DIdYouKnow(props) {
  const {width} = useAuth();
return (

        <View style={{backgroundColor:colors.secondary,width:width*0.9,borderRadius:width*0.03,padding:width*0.04,alignSelf:'center',overflow:'hidden'}}>
          
          <View style={{flexDirection:'row',backgroundColor:colors.secondaryLight,padding:4,borderRadius:5}}>
          <AppText color={colors.primary}>Starting 2023, BMW 4X4 vehicles will not be manufactured with traffic/turn indicators. Manufacturers argue that if you are rich enough to buy that car, poor people should not be able to know your next move.</AppText>
          </View>
        </View>
);
}

export default DIdYouKnow;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
//  alignItems:'center'
}
});