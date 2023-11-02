import React from 'react';
import { View, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import AppText from './AppText';
import useAuth from '../auth/useAuth';


const data =[
    {_id:1,title:'Advert1'},
    {_id:2,title:'Advert2'},
    {_id:3,title:'Advert3'},
    {_id:4,title:'Advert4'},
    {_id:5,title:'Advert5'},
]
function AppAdvertScrow(props) {
    const {width,height} = useAuth();
return (
    <View style={{height:height*0.2,backgroundColor:'blue'}}>
    <ScrollView
    horizontal
    shoshowsHorizontalScrollIndicator={false}
    contentContainerStyle={{marginVertical:'2%'}}
    >
      {data.map(item=>{
        
        return(
          <TouchableOpacity 
          key={item._id}
          style={[styles.scrowCard,{backgroundColor:'orange',width:width*0.7}]}
            >
                <AppText fontFamily={"PoppinsSemiBold"} fontSize={width*0.055}>{item.title}</AppText>
            </TouchableOpacity>
        )})}
        </ScrollView>

    </View>
);
}

export default AppAdvertScrow;
const styles = StyleSheet.create({
    scrowCard:{
        backgroundColor:'blue',
        margin:5,
        marginRight:10,
        // height:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
}
});