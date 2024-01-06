import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Alert, SafeAreaView,Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import colors from '../../config/colors';
import useAuth from '../../auth/useAuth';
import pickersData from '../../config/pickersData';
import AppPicker from '../../components/form/AppPicker';
import useApi from '../../hooks/useApi';
import servicesApi from '../../api/services';
import shops from '../../api/shops';


function AddShopPrices({}) {
  const { width, height,user } = useAuth();
  const allServicesApi = useApi(servicesApi.allServices);
  const getMyShopApi = useApi(shops.getMyShop);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [services, setServices] = useState([
    {id:1,label:'Body works',price:"20.00"},
    {id:2,label:'Spraying',price:"20.00"},
    {id:3,label:'Body works',price:"20.00"},
    {id:4,label:'Spraying',price:"20.00"},
    {id:5,label:'Body works',price:"20.00"},
    {id:6,label:'Spraying',price:"20.00"},
    {id:7,label:'Body works',price:"20.00"},
    {id:8,label:'Spraying',price:"20.00"},
    {id:9,label:'Body works',price:"9.00"},
  ]);
  
  const [servicesArray,setServicesArray] = useState(pickersData.Category);
  const [category,setCategory]=useState(servicesArray[0]);
  // const [selectedservice_code, setSetSelectedservice_code] = useState(30);



useEffect(()=>{
    getServices();
    // getMyShop();
},[])

const getMyShop = ()=>{
  console.log(user.shop_id)
  getMyShopApi.request(user.shop_id,user.token).
  then((respond)=>{
    setServices(respond.data.results[0].services||[]);
  }).catch((e)=>{
    console.error(e);
  })
}

const getServices =async ()=>{
  const {data} = await allServicesApi.request();
  // console.log(data.results)
  setServicesArray(data.results);
}
const getPickerValue=(value)=>{
  return setValue(value);
}

const titleComponent = (text)=>{
  return(
    <View style={{width:width*0.9}}>
    <AppText textAlign='left' marginLeft='3%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>{text}</AppText>
    </View>
  )
}


const addServices = () => {
  // Assuming existing state or initialize if it's null
  let existingServices = {
    "service_codes": [101, 102],
    "service_pricings": [
      {
        "Body works": 350,
        "Spraying": 200
      },
      {
        "Body works": 300,
        "Spraying": 150
      }
    ]
  };

  // Check if selectedservice_code already exists in service_codes
  const index = existingServices.service_codes.indexOf(category.service_code);

  if (index !== -1) {
    // If exists, update corresponding entry in service_pricings
    existingServices.service_pricings[index][title] = parseInt(price);
  } else {
    // If not, add new entry in service_codes and service_pricings
    existingServices.service_codes.push(category.service_code);
    const newService = {
      [title]: parseInt(price)
    };
    existingServices.service_pricings.push(newService);
  }

  console.log("=>",existingServices);
};

// Call the function
// addServices();




  return (
    <SafeAreaView>
    <View style={{ backgroundColor:colors.primary, width: width,alignItems:'center' }}>

      
      <View style={{ width: '100%', padding: '5%', marginTop: '1%', alignItems: 'center' }}>

    {titleComponent('Services:')}    
    <AppPicker
            selectedItem={category}
            onSelectedItem={item => setCategory(item)}
            items={servicesArray} getPickerValue={getPickerValue}
            placeholder="Select Category" marginTop={0} 
            borderWidth={2}
            width={width*0.9}
            borderRadius={width*0.03}
            borderColor={colors.secondary}
            />

        {titleComponent('Service name:')}    
        <AppTextInput width={width*0.9} borderRadius={width*0.03} placeholder={'Enter '} value={title} onChangeText={(text) => setTitle(text)} />
        
        {titleComponent('Service price:')} 
        <AppTextInput width={width*0.9} keyboardType='numeric' borderRadius={width*0.03} placeholder={'250'} multiline={true} value={price} onChangeText={(text) => setPrice(text)} />

        <AppButton active={loading} text={'Add'} width='100%' paddingHorizontal='40%' onPress={()=>{
            Keyboard.dismiss()
            if(title.trim().length==0){
                alert("Please you must fill in the title section")
            }else if(price.trim().length==0){
                alert("Please you must enter a price")
            }else{
              addServices()
            }
            
            }} />
      </View>

      <View style={{ height: height * 0.4,paddingBottom:'5%',width:width,backgroundColor:colors.primaryMedium,padding:'3%' }}>
        <FlatList
        //   contentContainerStyle={{ backgroundColor: 'orange' }}
          data={services}
          renderItem={({ item,index }) => (
            <View key={item.key} style={[styles.service, { borderColor:index % 2 ==0? colors.secondary:colors.primary }]}>
              <AppText fontFamily={"NunitoExtraBold"} numberOfLines={1} ellipsizeMode='tail' flex={1}>
                {item.label}
              </AppText>
              <AppText>GH₵ {item.price}</AppText>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    'Alert!',
                    'You are trying to delete this item from your service list.',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      { text: 'Continue', onPress: () => {
                        deleteFunction(item.id)
                      } },
                    ]
                  )
                }
              >
                <MaterialIcons name="cancel" style={{backgroundColor:'red',width:width*0.1}} size={width*0.06} color={colors.Pending} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
    </SafeAreaView>
  );
}

export default AddShopPrices;

const styles = StyleSheet.create({
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingVertical: '1%',
    paddingHorizontal: '2%',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    borderStyle: 'dotted',
  },
});
