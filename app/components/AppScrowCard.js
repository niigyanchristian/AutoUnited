import React from 'react';
import { View, StyleSheet,ScrollView,Image,Dimensions } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';

const data = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
]
function AppScrowCard({toggleBgColor=false}) {
  const {width} = useAuth();
return (
<ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{gap:30,paddingHorizontal:15}}>
        {data.map((item)=>(
          <View key={item.id} style={{backgroundColor:!toggleBgColor?colors.secondary:colors.grey,width:width*0.7,borderRadius:width*0.06,padding:width*0.04,overflow:'hidden',elevation:2,marginBottom:'1%'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{width:'20%',backgroundColor:colors.secondary,justifyContent:'center',alignItems:'center',borderRadius:30}}>
            <Image style={{borderRadius:width*0.3,width:width*0.17,height:width*0.17}} source={require('../assets/imgs/pro.png')}/>
            
            </View>
            <View style={{width:'50%'}}>
            <View>
              <AppText fontFamily='NunitoExtraBold' color={!toggleBgColor?colors.primary:colors.dark}>Adevert Inc.</AppText>
              <AppText marginTop={'3%'} fontSize={width*0.035}  numberOfLines={2}color={!toggleBgColor?colors.primary:colors.dark}>This is where the discription will be </AppText>
            </View>
            </View>
            <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
              <MaterialCommunityIcons name="bookmark-minus-outline" size={width*0.1} color={!toggleBgColor?colors.primary:colors.dark}/>

            </View>
          </View>
          {/* <View style={{flexDirection:'row',backgroundColor:colors.secondaryLight,marginTop:'10%',padding:4,borderRadius:5}}>
            <View style={{flex:1}}>
              <AppText color={colors.primary} fontFamily='NunitoSemiBold'>$662K</AppText>
              <AppText color={colors.primary} fontSize={width*0.035}>Raised</AppText>
            </View>
            <View style={{flex:1}}>
            <AppText color={colors.primary} fontFamily='NunitoSemiBold'>130</AppText>
              <AppText color={colors.primary} fontSize={width*0.035}>Investors</AppText>
            </View>
            <View style={{flex:1}}>
            <AppText color={colors.primary} fontFamily='NunitoSemiBold'>$72</AppText>
              <AppText color={colors.primary} fontSize={width*0.035}>Valuation</AppText>
            </View>
            <View style={{flex:1}}>
            <AppText color={colors.primary} fontFamily='NunitoSemiBold'>$15.7M</AppText>
              <AppText color={colors.primary} fontSize={width*0.035}>Min.Invest</AppText>
            </View>
          </View> */}
        </View>
        ))}
  
        
    </ScrollView>
);
}

export default AppScrowCard;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
//  alignItems:'center'
}
});




// {data2.map((item)=>(
//   <View key={item.id} style={{backgroundColor:colors.secondary,width:width*0.98,borderRadius:width*0.06,padding:width*0.04,marginVertical:'1%',overflow:'hidden'}}>
//   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//     <View style={{width:'20%',backgroundColor:colors.secondary,justifyContent:'center',alignItems:'center',borderRadius:30}}>
//     <Image style={{borderRadius:width*0.3,width:width*0.17,height:width*0.17}} source={require('../assets/imgs/pro.png')}/>
    
//     </View>
//     <View style={{width:'50%'}}>
//     <View>
//       <AppText fontFamily='NunitoExtraBold' color={colors.primary}>Adevert Inc.</AppText>
//       <AppText marginTop={'3%'} fontSize={width*0.035}  numberOfLines={2}color={colors.grey}>Organic food and herbal drug supply</AppText>
//     </View>
//     </View>
//     <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
//       <MaterialCommunityIcons name="bookmark-minus-outline" size={width*0.1} color={colors.primary}/>

//     </View>
//   </View>
  {/* <View style={{flexDirection:'row',backgroundColor:colors.secondaryLight,marginTop:'10%',padding:4,borderRadius:5}}>
    <View style={{flex:1}}>
      <AppText color={colors.primary} fontFamily='NunitoSemiBold'>$662K</AppText>
      <AppText color={colors.primary} fontSize={width*0.035}>Raised</AppText>
    </View>
    <View style={{flex:1}}>
    <AppText color={colors.primary} fontFamily='NunitoSemiBold'>130</AppText>
      <AppText color={colors.primary} fontSize={width*0.035}>Investors</AppText>
    </View>
    <View style={{flex:1}}>
    <AppText color={colors.primary} fontFamily='NunitoSemiBold'>$72</AppText>
      <AppText color={colors.primary} fontSize={width*0.035}>Valuation</AppText>
    </View>
    <View style={{flex:1}}>
    <AppText color={colors.primary} fontFamily='NunitoSemiBold'>$15.7M</AppText>
      <AppText color={colors.primary} fontSize={width*0.035}>Min.Invest</AppText>
    </View>
  </View> */}
{/* </View>
))} */}