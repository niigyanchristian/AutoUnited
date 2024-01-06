import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';



import AppText from '../components/AppText';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import routes from '../navigation/routes';
import { useTheme } from '../hooks/ThemeContext';
import partsApi from '../api/parts';
import useApi from '../hooks/useApi';
import colors from '../config/colors';
import useLocation from '../hooks/useLocation';

const data = [
    {id:1,title:'Spark plug'},
    {id:2,title:'Shell EV90'},
    {id:3,title:'Radiator'},
    {id:4,title:'Car Lights set'},
    {id:5,title:'Suspension Rods'},
    {id:6,title:'Toyota'},
]

let Battery= 'Battery'
let toyota= 'toyota'
function SearchScreen({navigation}) {
    const {width,height}=useAuth();
    const {theme} = useTheme();
    const [selectedItem, setSelectedItem] = useState(0);
    const [textInputValue, setTextInputValue] = useState('');
    const [any, setAny] = useState(false);
    const [active, setActive] = useState(false);
    const searchPartsApi = useApi(partsApi.searchParts);

    const handleSubmit = async () => {
        setActive(true)
        const res=await useLocation().getLocation();
        let datas = any?'':`?part_name=${Battery}&vehicle=${textInputValue} matrix`;
        const {data,status} = await searchPartsApi.request(datas);
    
        if (!status) {
            alert(result.data.errMsg)
            // setActive(false)
            return;
        } else {
            navigation.navigate(routes.MAIN_SEARCH_TAB,{
            screen:routes.SEARCH_RESULTS,
            params:{parts:data.results,location:res}
            })

            // logIn(result.data.results)
            setActive(false)
        }
    };

return (
<View style={styles.container}>
    <View style={{flexDirection:'row',width:width*0.9,padding:'0.5%',margin:'2%',borderRadius:20,paddingLeft:'5%',alignSelf:'center',borderWidth:1,borderColor:theme.primary}}>
        <TextInput placeholder='search' value={textInputValue}
        onChangeText={(text) => setTextInputValue(text)} style={{flex:1}}/>
        <Animatable.View animation="fadeInLeft" duration={2000} delay={500}>

        <TouchableOpacity style={{backgroundColor:theme.primary,width:width*0.2,height:height*0.05,justifyContent:'center',alignItems:"center",borderRadius:20}}
        onPress={()=>handleSubmit()}>
            {!active&&<FontAwesome name="search" size={width*0.07} color="#fff" />}
            {active&&<ActivityIndicator size={width*0.07} color={'#fff'}/>}
            </TouchableOpacity>
        </Animatable.View>
    </View>

    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:'3%'}}
        onPress={()=>{
            setTextInputValue('toyota');
            setAny(false)
            setSelectedItem(1)}}
    >
        <View style={{width:width*0.04,height:width*0.04,borderRadius:width*0.03,borderWidth:1,borderColor:theme.primary,marginRight:'3%',backgroundColor:selectedItem==1?theme.primary:null}}></View>
        <AppText>My Toyota</AppText>
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:'3%'}}
        onPress={()=>{
            setTextInputValue('royce');
            setAny(false);
            setSelectedItem(2)}}
    >
        <View style={{width:width*0.04,height:width*0.04,borderRadius:width*0.03,borderWidth:1,borderColor:theme.primary,backgroundColor:selectedItem==2?theme.primary:null,marginRight:'3%'}}></View>
        <AppText>My Royce</AppText>
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:'5%'}}
    onPress={()=>{
        setSelectedItem(4)
        setTextInputValue('All')
        setAny(true)}}>
        <View style={{width:width*0.04,height:width*0.04,borderRadius:width*0.03,borderWidth:1,borderColor:theme.primary,backgroundColor:selectedItem==4?theme.primary:null,marginRight:'3%'}}></View>
        <AppText>Any</AppText>
    </TouchableOpacity>

    <View style={{flexDirection:'row',alignItems:'center',marginBottom:'7%'}}>
        <View style={{width:width*0.04,height:width*0.04,borderRadius:width*0.03,borderWidth:1,marginRight:'3%'}}></View>
        <AppText>Other</AppText>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-around'}}>       
        <View style={{borderWidth:2,borderColor:theme.primary,flexDirection:'row',borderRadius:5,padding:'1%'}}>
            <AppText>Make</AppText>
            <MaterialIcons name="keyboard-arrow-down" size={24} color={theme.primary} />
        </View>
        <View style={{borderWidth:1,borderColor:theme.primary,flexDirection:'row',borderRadius:5,padding:'1%'}}>
            <AppText>Make</AppText>
            <MaterialIcons name="keyboard-arrow-down" size={24} color={theme.primary} />
        </View>
        <View style={{borderWidth:1,borderColor:theme.primary,flexDirection:'row',borderRadius:5,padding:'1%'}}>
            <AppText>Make</AppText>
            <MaterialIcons name="keyboard-arrow-down" size={24} color={theme.primary} />
        </View>
        </View>
    </View>

    

    <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.055}>Search History</AppText>
    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        {data.map((item)=>(
            <TouchableOpacity
            onPress={()=>{
                setTextInputValue(item.title)
                setSelectedItem(10)
            }}
            key={item.id} style={{ paddingHorizontal:'5%',padding:'2%',margin:'2%',borderRadius:20,backgroundColor:colors.secondary}}>
            <AppText color={colors.grey}>{item.title}</AppText>
            </TouchableOpacity>
        ))}
    </View>
</View>
);
}

export default SearchScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
//  alignItems:'center'
backgroundColor:colors.primary,
padding:'5%'
}
});