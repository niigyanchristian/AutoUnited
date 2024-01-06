import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, FlatList, Platform } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import services from '../api/services';
import useApi from '../hooks/useApi';
import pickersData from '../config/pickersData';
import AppButton from './AppButton';

function AppServicesPicker(props) {
  const {width,height}=useAuth();
  const [category,setCatgory]=useState(pickersData.Category[0]);
  const [selectItem,setSelectedItem]=useState();
  const [modal,setModal]=useState(false);
  let placeholder = 'Please select Service'
  console.log('====================================');
  console.log(category);
  console.log('====================================');

return (
<>
<TouchableOpacity
onPress={()=>setModal(true)}
style={{backgroundColor:colors.grey,borderRadius:width*0.1, height:height*0.06,flexDirection:'row',paddingHorizontal:'3%',alignItems:'center',borderWidth:2,borderColor:colors.secondary}}>
  <AppText>{placeholder}</AppText>
</TouchableOpacity>

<Modal visible={modal}>
                <View style={{backgroundColor:colors.white,flex:1}}>
                {/* <AppText children="Hello"/> */}
                <View style={{alignItems:'center',marginVertical:'5%'}}>
                <AppButton width='60%' text="Close" onPress={()=> setModal(false)}/>

                </View>
                <FlatList
                contentContainerStyle={{alignItems:'center'}}
                    data={pickersData.Category}
                    // numColumns={2}
                    keyExtractor={(item,index) => index}
                    // extraData={selectedId}
                    renderItem={({ item }) => {
                        return (
                          <TouchableOpacity 
                          onPress={()=>{
                            setSelectedItem(item)
                              setModal(false)
                              }}
                          style={{marginVertical:width*0.05,marginHorizontal:width*0.05,alignSelf:'center',borderBottomWidth:1,borderStyle:(Platform.OS='ios')?'solid':'dashed',borderBottomColor:colors.secondary}}>
                               <AppText textAlign="center" children={item.label}/>
                          </TouchableOpacity>
                           
                        );
                      }}
                />
                </View>
</Modal>

</>
);
}

export default AppServicesPicker;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});