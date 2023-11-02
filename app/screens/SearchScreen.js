import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import routes from '../navigation/routes';


const data = [
    {id:1,title:'Spark plug'},
    {id:2,title:'Shell EV90'},
    {id:3,title:'Radiator'},
    {id:4,title:'Car Lights set'},
    {id:5,title:'Suspension Rods'},
]
function SearchScreen({navigation}) {
    const {width}=useAuth()
return (
<View style={styles.container}>
    <View style={{backgroundColor:'orange',flexDirection:'row',width:width*0.9,padding:'0.5%',margin:'2%',borderRadius:20,paddingLeft:'5%',alignSelf:'center'}}>
        <TextInput placeholder='search' style={{flex:1}}/>
        <TouchableOpacity style={{backgroundColor:'#000',width:width*0.2,alignItems:"center",borderRadius:20,padding:'1%'}}
        
        onPress={()=>navigation.navigate(routes.HOME_TAB,{
            screen:routes.SEARCH_RESULTS,
            })}
        ><FontAwesome name="search" size={width*0.07} color="#fff" /></TouchableOpacity>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'red'}}>
        <View style={{width:width*0.04,height:width*0.04,borderRadius:width*0.03,borderWidth:1,marginRight:'3%',backgroundColor:'#000'}}></View>
        <AppText>My Toyota</AppText>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'red'}}>
        <View style={{width:width*0.04,height:width*0.04,borderRadius:width*0.03,borderWidth:1,marginRight:'3%'}}></View>
        <AppText>My Royce</AppText>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'red'}}>
        <View style={{width:width*0.04,height:width*0.04,borderRadius:width*0.03,borderWidth:1,marginRight:'3%'}}></View>
        <AppText>Other</AppText>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-around'}}>       
        <View style={{borderWidth:1,flexDirection:'row',borderRadius:5,padding:'1%'}}>
            <AppText>Make</AppText>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <View style={{borderWidth:1,flexDirection:'row',borderRadius:5,padding:'1%'}}>
            <AppText>Make</AppText>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <View style={{borderWidth:1,flexDirection:'row',borderRadius:5,padding:'1%'}}>
            <AppText>Make</AppText>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        </View>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'red'}}>
        <View style={{width:width*0.04,height:width*0.04,borderRadius:width*0.03,borderWidth:1,marginRight:'3%'}}></View>
        <AppText>Any</AppText>
    </View>

    <AppText>Search History</AppText>
    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        {data.map((item)=>(
            <View key={item.id} style={{ paddingHorizontal:'5%',padding:'2%',margin:'2%',borderRadius:20,backgroundColor:'grey'}}>
            <AppText>{item.title}</AppText>
            </View>
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
padding:'5%'
}
});