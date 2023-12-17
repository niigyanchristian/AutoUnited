import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import ProductCard from './ProductCard';
import useActiveScreenFunc from '../hooks/useActiveScreenFunc';

import partsApi from '../api/parts';
import useApi from '../hooks/useApi';
import colors from '../config/colors';


const datag = [
    {id:1,shopName:'Shop 1',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:2,shopName:'Shop 2',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:5},
    {id:3,shopName:'Shop 3',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:2.5},
    {id:4,shopName:'Shop 4',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4},
    {id:5,shopName:'Shop 5',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:6,shopName:'Shop 6',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:3},
]
function Similar({navigation,part}) {
    const {width,height} = useAuth();
    const {theme}=useTheme();
    const [data,setData]=useState([]);
    const [active, setActive] = useState(false);
    const searchPartsApi = useApi(partsApi.searchParts);

    const handleSubmit = async () => {
        // setActive(true)
        let datas ='';
        const {data,status} = await searchPartsApi.request(datas);
    
        if (!status) {
            alert(result.data.errMsg)
            // setActive(false)
            return;
        } else {
            setData(data.results)

            // logIn(result.data.results)
            setActive(false)
        }
    };
    useActiveScreenFunc().FocusedAndBlur(()=>{
        setActive(true)
        handleSubmit()
      },()=>null);

if(active){
    return <ActivityIndicator color={colors.secondary} size={width*0.1}/>
}

return (
<ScrollView 
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={{marginVertical:'1%'}}>
{data.map(item=>{
        return(
            <View key={item.part_id}  style={{width:width*0.47,}}>
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