import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import useAuth from '../../auth/useAuth';
import AppPicker from '../../components/AppPicker';
import AppButton from '../../components/AppButton';
import colors from '../../config/colors';
import routes from '../../navigation/routes';


const data = [
    {id:1,title:'Toyota'},
    {id:2,title:'Accessories & Lubes'},
    {id:3,title:'Air Intake & Fuel Delivery'},
    {id:4,title:'Body & Exterior'},
    {id:5,title:'Brakes & Parts'},
    {id:6,title:'Electronics & Ignition'},
    {id:7,title:'Engine Cooling System'},
    {id:8,title:'Engine & Components'},
    {id:9,title:'Exhaust'},
    {id:10,title:'Filters'},
    {id:11,title:'Gaskets & Seals'},
]

function AddCarScreen({navigation}) {
    const {width}=useAuth();
    const [selectedItem,onSelectedItem]=useState(data[0]);
return (
<View style={styles.container}>
    <AppHeader  Component={<AppText fontFamily='NunitoExtraBold' fontSize={width*0.05}>Add Car</AppText>}/>
    <ScrollView style={{flex:1}} contentContainerStyle={{padding:'5%',width:'100%',backgroundColor:colors.secondaryLight,width:width}}>
        <AppText fontSize={width*0.045} fontFamily='NunitoExtraBold'>Make</AppText>
        <AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={'100%'} borderRadius={width*0.1} paddingLeft='5%'/>
        <AppText marginTop='1%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>Model</AppText>
        <AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={'100%'} borderRadius={width*0.1} paddingLeft='5%'/>
        <AppText marginTop='1%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>Transmission Type</AppText>
        <AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={'100%'} borderRadius={width*0.1} paddingLeft='5%'/>
        <AppText marginTop='1%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>Chassis Number</AppText>
        <AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={'100%'} borderRadius={width*0.1} paddingLeft='5%'/>


        <AppButton text={'Get remaining information'} marginTop={'5%'} backgroundColor={colors.primary} textColor={colors.secondary}/>


        <AppText marginTop='1%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>Drivetrain</AppText>
        <AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={'100%'} borderRadius={width*0.1} paddingLeft='5%'/>
        <AppText marginTop='1%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>Body/Type</AppText>
        <AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={'100%'} borderRadius={width*0.1} paddingLeft='5%'/>
        <AppText marginTop='1%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>Fuel</AppText>
        <AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={'100%'} borderRadius={width*0.1} paddingLeft='5%'/>
        <AppText marginTop='1%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>Model Year</AppText>
        <AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={'100%'} borderRadius={width*0.1} paddingLeft='5%'/>
        
        <AppButton text={'Save'} marginTop={'5%'} backgroundColor={colors.primary} textColor={colors.secondary} 
        onPress={()=>{
            navigation.navigate(routes.CARS_TAB,{
              screen:routes.CAR_DETAIL,
            //   params: {cat:item.category,cat_name:item.title}
              })
          }}/>
    </ScrollView>
</View>
);
}

export default AddCarScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primaryMedium,
}
});