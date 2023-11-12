import React from 'react';
import { View, StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native';
import AppText from './AppText';
import useAuth from '../auth/useAuth';
import Card from './Card';


const data =[
    {_id:1,title:'Advert1',price:'GHC120.00'},
    {_id:2,title:'Advert2',price:'GHC120.00'},
    {_id:3,title:'Advert3',price:'GHC120.00'},
    {_id:4,title:'Advert4',price:'GHC120.00'},
    {_id:5,title:'Advert5',price:'GHC120.00'},
]
function AppFeaturedProductsScrow({YScale=1,XScale=1,TextSize=1,titleOnly=false,disOnly=false}) {
    const {width,height} = useAuth();
return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{marginVertical:'2%'}}>
      {data.map(item=>{    
        return(
          <Card key={item._id} item={item} TextSize={TextSize} XScale={XScale} YScale={YScale} titleOnly={titleOnly} disOnly={disOnly}/>
        )})}
        </ScrollView>
);
}

export default AppFeaturedProductsScrow;
const styles = StyleSheet.create({
    
});