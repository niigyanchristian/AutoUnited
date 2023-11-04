import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import AppHeader from '../components/AppHeader';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import Card from '../components/Card';


const data = [
    {id:1,title:'AC & Heat'},
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
const datas =[
    {_id:1,title:'Advert1',price:'GHC120.00'},
    {_id:2,title:'Advert2',price:'GHC120.00'},
    {_id:3,title:'Advert3',price:'GHC120.00'},
    {_id:4,title:'Advert4',price:'GHC120.00'},
    {_id:5,title:'Advert5',price:'GHC120.00'},
]
function CategoryScreen(props) {
    const {width,height}=useAuth();
    const {theme}=useTheme();
    const [selected,setSelected]=useState(0);
return (
<View style={styles.container}>
    <AppHeader/>
    <View style={{flexDirection:'row'}}>
        <View style={{width:width*0.25,backgroundColor:theme.secondary,height:height,padding:'2%'}}>
            {data.map((item,index)=>{
                return(
                    <TouchableOpacity key={item.id}
                    style={{backgroundColor:index==selected?theme.white:theme.secondary,borderBottomWidth:1,}}
                    onPress={()=>setSelected(index)}
                    ><AppText>{item.title}</AppText></TouchableOpacity>
                )
            })}
        </View>
        <View style={{width:width*0.75,backgroundColor:'orange',height:500}}>
                <AppText>Crowns & Emblems</AppText>
            <View style={{width:'100%',backgroundColor:'blue'}}>
                <Card item={datas[1]} />
            </View>
        </View>
    </View>
</View>
);
}

export default CategoryScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center'
}
});