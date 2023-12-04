import React, { useState } from 'react';
import { View, StyleSheet,TouchableOpacity, FlatList, Image } from 'react-native';
import { Entypo,MaterialIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';


const data = [
    {id:1,shopName:'Shop 1',discription:'Toyota Camry Slightly Used Suspension Rods with major hydraulics',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:2,shopName:'Shop 2',discription:'Toyota Camry Slightly Used Suspension Rods with major hydraulics',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:5},
    {id:3,shopName:'Shop 3',discription:'Toyota Camry Slightly Used Suspension Rods with major hydraulics',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:2.5},
    {id:4,shopName:'Shop 4',discription:'Toyota Camry Slightly Used Suspension Rods with major hydraulics',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4},
    {id:5,shopName:'Shop 3',discription:'Toyota Camry Slightly Used Suspension Rods with major hydraulics',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:6,shopName:'Shop 4',discription:'Toyota Camry Slightly Used Suspension Rods with major hydraulics',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:3},
]
function CartScreen(props) {
    const {width,height}=useAuth();
    const {theme}=useTheme();
    const [list,setList]=useState(false);
    const [count,setCount]=useState(1);
    const [selected,setSelected]=useState(1);
    
return (
<View style={styles.container}>
<FlatList
    data={data}
    horizontal={false}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item.id}
    renderItem={({ item,index }) => 
    {
 
      return(
        <>
        <View style={{backgroundColor:theme.secondary,width:width*0.98,marginVertical:'1%',borderRadius:10,overflow:'hidden',alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:width*0.27,height:width*0.27,margin:'2%',marginVertical:0}}>
            <Image style={{width:'100%',height:'100%'}} source={item.img}/>
            </View>
            <View style={{width:width*0.72,padding:'2%',paddingLeft:'1%'}}>
                <AppText width={'95%'} fontFamily={"NunitoSemiBold"}>{item.discription}</AppText>
                
                <AppText width={'95%'} numberOfLines={2} fontSize={width*0.035}>Seller: Shop 1</AppText>
                <AppText fontFamily={"NunitoSemiBold"} >GH₵ {item.price}</AppText>       
            </View>
            </View>
            <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <MaterialIcons name="delete" size={width*0.06} color="red" />
                    <AppText  color="red">Remove</AppText>
                </TouchableOpacity>

            <View style={{flexDirection:'row',marginBottom:'1%'}}>
                <TouchableOpacity
                onPress={()=>{setCount(count-1)}}
                style={[styles.box,{width:width*0.1,height:width*0.08}]}><Entypo name="minus" size={24} color={theme.primary} /></TouchableOpacity>
                <View style={[styles.box,{width:width*0.1,height:width*0.08}]}><AppText fontFamily={"NunitoSemiBold"} color={theme.primary}>{count}</AppText></View>
                <TouchableOpacity
                onPress={()=>setCount(count+1)}
                style={[styles.box,{width:width*0.1,height:width*0.08,backgroundColor:theme.primary}]}><Entypo name="plus" size={24} color={theme.white} /></TouchableOpacity>
            </View>
            </View>
        </View>


</>
      )}}
      />
</View>
);
}

export default CartScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
},
box:{
    // padding:'2%',
    margin:'1%',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,

}
});