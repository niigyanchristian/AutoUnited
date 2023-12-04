import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Entypo,AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';


import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppText from './AppText';
import Rating from './Rating';

const data = [
    {id:1,title:'Rods'},
    {id:2,title:'Springs'},
    {id:3,title:'Suspenders'},
]

function AppFilter(props) {
    const {width} = useAuth();
    const {theme} = useTheme();
    const [modal,setModal] =useState(false);
    
return (
    <>
<TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
onPress={()=>setModal(true)}>
    <AntDesign name="filter" size={width*0.08} color={theme.primary} />
    <AppText fontSize={width*0.045} fontFamily={"NunitoSemiBold"}>Filters</AppText>
</TouchableOpacity>



    {/* Modal */}
    <Modal visible={modal}>
        <View style={{padding:'5%'}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
            <Entypo name="cross" size={width*0.1} color={theme.primary} onPress={()=>setModal(false)}/>
            <AppText fontSize={width*0.06} fontFamily={"NunitoSemiBold"}>Filters</AppText>
            <AppText fontSize={width*0.05} fontFamily={"NunitoSemiBold"} color={theme.primary}>Clear All</AppText>
        </View>

        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.055}>Category</AppText>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            {data.map((item)=>(
                <View key={item.id} style={{ paddingHorizontal:'5%',padding:'2%',margin:'2%',borderRadius:20,backgroundColor:theme.primary}}>
                <AppText color={theme.white}>{item.title}</AppText>
                </View>
            ))}
        </View>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.055}>Distance</AppText>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.055}>Price</AppText>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
            <View style={{backgroundColor:theme.primary,padding:'2%',borderRadius:10,flexDirection:'row',alignItems:'center',width:'47%'}}>
                <AppText color={theme.white}>GH₵</AppText>
                <TextInput placeholder='Min|' placeholderTextColor={theme.white} style={[styles.textInputBox,{fontSize:width*0.04,color:theme.dark,}]}/>
            </View>
            <View style={{backgroundColor:theme.primary,padding:'2%',borderRadius:10,flexDirection:'row',alignItems:'center',width:'47%'}}>
                <AppText color={theme.white}>GH₵</AppText>
                <TextInput placeholder='Max|' placeholderTextColor={theme.white} style={[styles.textInputBox,{fontSize:width*0.04,color:theme.dark}]}/>
            </View>
        </View>

        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.055}>Rating</AppText>
        <Rating rating={4}/>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.055}>Delivery Options</AppText>

        <View style={[styles.mybutton,{backgroundColor:theme.primary,shadowColor: theme.primary}]}>
            <AppText fontFamily={"NunitoSemiBold"} color={theme.white} fontSize={width*0.055}>Show results</AppText>
        </View>
    </View>
    </Modal>
    </>
);
}

export default AppFilter;
const styles = StyleSheet.create({
    textInputBox:{
        flex:1,
        marginHorizontal:10
},
mybutton:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:'10%',
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y) for iOS
    shadowOpacity: 0.5,      // Shadow opacity for iOS
    shadowRadius: 2,         // Shadow radius for iOS
    elevation: 5, 
}
});