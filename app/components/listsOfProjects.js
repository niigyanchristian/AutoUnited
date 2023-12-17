import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import { Ionicons } from '@expo/vector-icons';
import routes from '../navigation/routes';

function ListsOfProjects({navigation}) {
    const {width} = useAuth();

    const data=[
        {id:1},
        {id:2},
        {id:3},
        {id:4},
    ]
return (
    <View>
        {data.map((item)=>(
            <TouchableOpacity key={item.id} style={{width:'100%',height:width*0.3,flexDirection:'row',alignItems:'center',}}
// onPress={()=>
//     navigation.navigate(routes.SAVEDTAB,{
//     screen:routes.PROJECTDETAILS,
//     params:{shop:'item'}})
    // }
>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:width*0.24,height:width*0.25,borderRadius:width*0.04}} source={require('../assets/imgs/male_13.jpg')}/>
        </View>
        <View style={{flex:4,padding:'2%'}}>
            <AppText fontFamily='NunitoExtraBold'>The Title</AppText>
            <AppText fontSize={width*0.04}>This is where the discription will be </AppText>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Ionicons name="bookmark" size={width*0.1} color={colors.secondary} />
        </View>
    </TouchableOpacity>
        ))}
    </View>

);
}

export default ListsOfProjects;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});