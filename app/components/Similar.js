import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import ProductCard from './ProductCard';


const data = [
    {id:1,shopName:'Shop 1',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:2,shopName:'Shop 2',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:5},
    {id:3,shopName:'Shop 3',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:2.5},
    {id:4,shopName:'Shop 4',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4},
    {id:5,shopName:'Shop 5',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:6,shopName:'Shop 6',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:3},
]
function Similar({navigation}) {
    const {width,height} = useAuth();
    const {theme}=useTheme();
return (
    // <View style={{}}>
<ScrollView 
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={{marginVertical:'1%'}}>
{data.map(item=>{
        
        return(
            <View key={item.id}  style={{width:width*0.47,}}>
            <ProductCard item={item} navigation={navigation}/>
            </View>
        )})}
</ScrollView>
);
}
{/* </View> */}

export default Similar;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});