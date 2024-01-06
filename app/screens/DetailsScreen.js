import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
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
import colors from '../config/colors';
import usecart from '../auth/usecart';

const data = [
    {id:1,shopName:'Shop 1',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:4.5},
    {id:2,shopName:'Shop 2',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:5},
    {id:3,shopName:'Shop 3',discription:'Toyota Camry Slightly Used Suspension Rods …',price:'20.00',img:require('../assets/imgs/male_13.jpg'),rate:2.5},
]

function DetailsScreen({navigation,route}) {
    const {part} = route.params;
    const {width,height}= useAuth();
    const {theme}=useTheme();
    const [modal,setModal]=useState(false);
    const [items,setItems]=useState([]);
    const [change,setChange]=useState(false);

    const getFunc = async () => {
      setItems(await usecart.getCart());
      console.log("items",await usecart.getCart())
    };
    
    useEffect(() => {
      getFunc();
    }, [change]);

return (
<View style={styles.container}>
    <AppHeader Component={<AppText fontSize={width*0.045} fontFamily={"NunitoExtraBold"}>Component Details</AppText>} cartCount={items.length}/>
    <ScrollView>
    <View style={{width:'100%',backgroundColor:colors.primaryMedium}}>
    <ScrowImages/>
        </View>    
    <View style={{paddingBottom:0,width:width,padding:'3%',}}>
        <AppText fontFamily={"NunitoBold"} fontSize={width*0.045}>{part.part_name}</AppText>
        <AppText  fontFamily={"NunitoBold"} color={colors.secondary}>GH₵{part.part_price}</AppText>
        <AppText color='#bbb'>In stock</AppText>
        <AppText>Delivery Available in Accra</AppText>
        <View style={{flexDirection:'row',alignItems:'baseline'}}>
        <Rating rating={part.part_rating}/>
        <AppText>{`(${part.part_rating}) reviews`}</AppText>
        </View>
        <TouchableOpacity style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:'2%'}}
        onPress={()=>setModal(true)}>
        <AppText fontSize={width*0.045} fontFamily={"NunitoSemiBold"}>Specificaion & Description</AppText>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        </TouchableOpacity>
        <AppText fontSize={width*0.045} fontFamily={"NunitoSemiBold"}>Variants</AppText>
    </View>
        <View style={{backgroundColor:colors.primaryMedium,height:height*0.22,padding:'1.5%'}}>
        <AppFeaturedProductsScrow titleOnly={true}/>
        </View>
        <View style={{width:width,padding:'3%'}}>
        <AppText fontSize={width*0.045} fontFamily={"NunitoSemiBold"}>Delivery Information</AppText>
        <View>
            <AppText>Me as a shop this is the delivery policy I have set
                I will deliver only to Accra
                This is my return policy
                You can replace but you wont get your money back.
                </AppText>
        </View>
        </View>

        <Reviews/>

        <View style={{width:width,backgroundColor:colors.secondary,padding:'5%',flexDirection:'row'}}>
            <View style={{width:width*0.3,height:width*0.3,borderRadius:10,overflow:'hidden',marginRight:'5%'}}>
            <Image style={{width:'100%',height:'100%'}} source={require('../assets/imgs/male_13.jpg')}/>
            </View>
            <View>
                <AppText color={theme.white} fontFamily={"NunitoSemiBold"}>Abose Okae Store 2</AppText>
                <AppText color={theme.white}>95% Positive Feedback</AppText>
                <AppText color={theme.white}>234 Followers</AppText>
                <View style={{flexDirection:'row',width:width*0.5,justifyContent:'space-between'}}>
                <View style={{backgroundColor:theme.white,borderRadius:20,justifyContent:'center',alignItems:'center',width:width*0.4}}><AppText>Visit store</AppText></View>

                <MaterialCommunityIcons name="email-outline" size={width*0.08} color={theme.white} />
                </View>
            </View>

        </View>
            {/* <View> */}
                <AppText fontSize={width*0.045} fontFamily={"NunitoSemiBold"} marginLeft='3%'>Similar</AppText>
                <View style={{width:width,backgroundColor:colors.primaryMedium}}>
                    <Similar navigation={navigation} part={part}/>
                </View>
                
            {/* </View> */}
            <View  style={{flexDirection:'row',width:width,justifyContent:'space-around',alignItems:'center',alignSelf:'center',backgroundColor:colors.primaryMedium}}>
                <AppButton text={'Call'} width={width*0.4}/>
                <AppButton text={'Add to cart'} width={width*0.4} onPress={()=>{
                  usecart.storeCart([...items,{id:3,title:'1234'}])
                  setChange(!change);
                  }}/>
            </View>
        </ScrollView>

        <Modal visible={modal} transparent={true}>
    <View style={styles.modalContainer1}>
      <View style={{ padding: '5%', width: width * 0.9, backgroundColor: colors.secondary, alignItems: 'center', alignSelf: 'center', borderRadius: 10, }}>
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: '3%' }}>
            <Entypo name="cross" size={width * 0.1} color={colors.primary} onPress={() => setModal(false)} />
            <AppText fontSize={width * 0.06} fontFamily={"NunitoSemiBold"}>Product Details</AppText>
          </View>

          {data.map(item => (
            <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: theme.secondary }}>
              <AppText flex={1}>Attrib 1</AppText>
              <AppText flex={1}>Value 1</AppText>
            </View>
          ))}

          <ScrollView style={{maxHeight:height*0.5}}>
             <AppText marginVertical='3%'>{part.part_description}</AppText>
          </ScrollView>
        </>
      </View>
    </View>
  {/* </View> */}
</Modal>


</View>
);
}

export default DetailsScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary
},
box:{
    justifyContent:'center',alignItems:'center',padding:'5%'
},
modalContainer1:{
    flex:1,
    backgroundColor:'#00000033',
    justifyContent:'center',
  },
});