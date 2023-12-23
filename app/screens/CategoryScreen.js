import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import AppHeader from '../components/AppHeader';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import Card from '../components/Card';
import AppPicker from '../components/AppPicker';
import colors from '../config/colors';
import AppScrowCard from '../components/AppScrowCard';
import useApi from '../hooks/useApi';
import categories from '../api/categories';

const datad = [
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
    const [selectedItem,onSelectedItem]=useState([]);
    const [active,setActive] =useState(false);
    const [data,setData] =useState(null);
    const getCategoriesApi = useApi(categories.getCategories);

    useEffect(()=>{
        handleSubmit();
      },[])
    
      const handleSubmit = () => {
        setActive(true);
        getCategoriesApi.request().
        then((response)=>{
            let info = []
            response.data.results.forEach(element => 
                info.push({id:element.category_id,title:element.category_name}));
          setData(info)
          onSelectedItem(info[0])
        }).
        catch((e)=>console.error(e)).
        finally(()=>setActive(false));
    };
  

return (
<View style={styles.container}>
    <AppHeader Component={data?<AppPicker items={data} selectedItem={selectedItem}  onSelectedItem={onSelectedItem} width={width*0.5}/>:<AppText>Loading...</AppText>}/>
        <View style={{width:width}}>
                <AppText fontFamily='NunitoExtraBold' marginTop='5%' marginLeft='3%' fontSize={width*0.045}>Crowns & Emblems</AppText>
            <View style={[styles.wapper,{}]}>
            <AppScrowCard toggleBgColor={false} />
                
            </View>
            
            <AppText fontFamily='NunitoExtraBold' marginTop='5%' marginLeft='3%' fontSize={width*0.045}>Lubricants & Additives</AppText>
            <View style={[styles.wapper,{}]}>
            <AppScrowCard toggleBgColor={true} />
            </View>
                <AppText fontFamily='NunitoExtraBold' marginTop='5%' marginLeft='3%' fontSize={width*0.045}>Tools & Equipment</AppText>
            <View style={[styles.wapper,{}]}>
            <AppScrowCard />
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
backgroundColor:colors.primary,
 alignItems:'center'
},
wapper:{
    width:'100%',
    borderColor:colors.secondary,
    // marginVertical:'2%',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.primaryMedium
}
});