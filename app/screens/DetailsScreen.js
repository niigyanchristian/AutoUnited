import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons,MaterialIcons,Entypo } from '@expo/vector-icons';

import AppText from '../components/AppText';
import AppHeader from '../components/AppHeader';
import ScrowImages from '../components/ScrowImages';
import useAuth from '../auth/useAuth';
import Rating from '../components/Rating';
import AppFeaturedProductsScrow from '../components/AppFeaturedProductsScrow';
import { useTheme } from '../hooks/ThemeContext';
import Reviews from '../components/Reviews';
import ProductCard from '../components/ProductCard';
import Similar from '../components/Similar';
import AppButton from '../components/AppButton';

const data = [
    {id:1,shopName:'Shop 1',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:2,shopName:'Shop 2',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:5},
    {id:3,shopName:'Shop 3',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:2.5},
    {id:4,shopName:'Shop 4',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4},
    {id:5,shopName:'Shop 3',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:6,shopName:'Shop 4',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:3},
]

function DetailsScreen({navigation}) {
    const {width,height}= useAuth();
    const {theme}=useTheme();
    const [modal,setModal]=useState(false)
return (
<View style={styles.container}>
    <AppHeader/>
    <ScrollView>
    <ScrowImages/>
    <View style={{paddingBottom:0,width:width,padding:'3%',}}>
        <AppText>Toyota Camry Slightly Used Suspension Rods with major hydraulics</AppText>
        <AppText fontSize={width*0.045} fontFamily={"PoppinsSemiBold"}>GH₵30.00</AppText>
        <AppText color='#bbb'>In stock</AppText>
        <AppText>Delivery Available in Accra</AppText>
        <View style={{flexDirection:'row',alignItems:'baseline'}}>
        <Rating rating={4.5}/>
        <AppText>{`(32) reviews`}</AppText>
        </View>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:'2%'}}
        onPress={()=>setModal(true)}>
        <AppText fontSize={width*0.045} fontFamily={"PoppinsSemiBold"}>Specificaion & Description</AppText>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        </TouchableOpacity>
        <AppText fontSize={width*0.045} fontFamily={"PoppinsSemiBold"}>Variants</AppText>
    </View>
        <View style={{backgroundColor:theme.primary,height:height*0.22,padding:'1.5%'}}>
        <AppFeaturedProductsScrow titleOnly={true}/>
        </View>

        <Reviews/>

        <View style={{width:width,backgroundColor:theme.primary,padding:'5%',flexDirection:'row'}}>
            <View style={{width:width*0.3,height:width*0.3,borderRadius:10,overflow:'hidden',marginRight:'5%'}}>
            <Image style={{width:'100%',height:'100%'}} source={require('../assets/imgs/male_13.jpg')}/>
            </View>
            <View>
                <AppText color={theme.white} fontFamily={"PoppinsSemiBold"}>Abose Okae Store 2</AppText>
                <AppText color={theme.white}>95% Positive Feedback</AppText>
                <AppText color={theme.white}>234 Followers</AppText>
                <View style={{flexDirection:'row',width:width*0.5,justifyContent:'space-between'}}>
                <View style={{backgroundColor:theme.white,borderRadius:20,justifyContent:'center',alignItems:'center',width:width*0.4}}><AppText>Visit store</AppText></View>

                <MaterialCommunityIcons name="email-outline" size={width*0.08} color={theme.white} />
                </View>
            </View>

        </View>
            {/* <View> */}
                <AppText fontSize={width*0.045} fontFamily={"PoppinsSemiBold"} marginLeft='3%'>Similar</AppText>
                <View style={{width:width,}}>
                    <Similar navigation={navigation}/>
                </View>
                
            {/* </View> */}
            <View  style={{flexDirection:'row',width:width,justifyContent:'space-between',alignItems:'center'}}>
                <AppButton text={'Call'} width={width*0.46}/>
                <AppButton text={'Add to cart'} width={width*0.46}/>
            </View>
        </ScrollView>

        <Modal visible={modal}>
        <ScrollView contentContainerStyle={{padding:'5%'}}>
        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:'3%'}}>
            <Entypo name="cross" size={width*0.1} color={theme.secondary} onPress={()=>setModal(false)}/>
            <AppText fontSize={width*0.06} fontFamily={"PoppinsSemiBold"}>Product Details</AppText>
           
        </View>
        
        {data.map(item=>{
            return(
                <View key={item.id} style={{flexDirection:'row',alignItems:'center',borderBottomWidth:2,borderBottomColor:theme.secondary}}>
                    <AppText flex={1}>Attrib 1</AppText>
                    <AppText flex={1}>Value 1</AppText>
                </View>
            )
        })}

        <View>
            <AppText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo orci vel purus cursus, in fermentum felis congue. Aliquam vestibulum, nulla non egestas pharetra, eros sapien luctus nibh, at suscipit ante tellus et eros. Quisque sagittis massa ullamcorper odio egestas viverra. Ut aliquet, enim non rhoncus semper, ante arcu pulvinar erat, et scelerisque felis felis a metus. Suspendisse aliquam, dolor in viverra porta, nunc ante porttitor mauris, id ornare risus nisl sed turpis. Fusce vel iaculis odio. Integer eget tristique sapien. In venenatis ultrices ante a porta. Nunc auctor odio nisi, non rutrum ante faucibus nec. Donec non pharetra dui. Duis elementum erat sit amet metus ornare pulvinar. In tincidunt condimentum lectus a ultricies. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo orci vel purus cursus, in fermentum felis congue. Aliquam vestibulum, nulla non egestas pharetra, eros sapien luctus nibh, at suscipit ante tellus et eros. Quisque sagittis massa ullamcorper odio egestas viverra. Ut aliquet, enim non rhoncus semper, ante arcu pulvinar erat, et scelerisque felis felis a metus. Suspendisse aliquam, dolor in viverra porta, nunc ante porttitor mauris, id ornare risus nisl sed turpis. Fusce vel iaculis odio. Integer eget tristique sapien. In venenatis ultrices ante a porta. Nunc auctor odio nisi, non rutrum ante faucibus nec. Donec non pharetra dui. Duis elementum erat sit amet metus ornare pulvinar. In tincidunt condimentum lectus a ultricies. 

</AppText>
        </View>
        </ScrollView>
        </Modal>
</View>
);
}

export default DetailsScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center'
},
box:{
    justifyContent:'center',alignItems:'center',padding:'5%'
}
});