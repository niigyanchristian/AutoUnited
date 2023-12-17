import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, FlatList,Image, Platform } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import AppButton from './AppButton';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import colors from '../config/colors';



  

 


function AppPicker({items,placeholder,onSelectedItem,selectedItem,...otherprop}) {
    const [modal,setModal]=useState(false);
    const {width,height} =useAuth();
    const {theme}=useTheme();
    
return (
    <>
   
            <TouchableOpacity
            style={{backgroundColor:colors.grey,borderRadius:width*0.02, height:height*0.06,flexDirection:'row',paddingHorizontal:'2%',alignItems:'center',...otherprop}}
            
            onPress={()=>setModal(true)}>
                <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                {/* <MaterialIcons style={{marginRight:10}} size={25} name='account-circle' color={theme.mediumDark}/> */}
                  <AppText fontSize={15} color={selectedItem ? colors.dark : 'yellow'}> {placeholder??selectedItem.title}</AppText>
                  {/* <AppText>Helll</AppText> */}
                </View>
                <MaterialCommunityIcons name="chevron-down" size={20} color={theme.dark} />
            </TouchableOpacity>





            <Modal visible={modal}>
                <View style={{backgroundColor:theme.white,flex:1}}>
                {/* <AppText children="Hello"/> */}
                <View style={{alignItems:'center',marginVertical:'5%'}}>
                <AppButton width='60%' text="Close" onPress={()=> setModal(false)}/>

                </View>
                <FlatList
                contentContainerStyle={{alignItems:'center'}}
               
                    data={items}
                    // numColumns={2}
                    keyExtractor={item => item.id}
                    // extraData={selectedId}
                    renderItem={({ item }) => {
                        return (
                          <TouchableOpacity 
                          onPress={()=>{
                              onSelectedItem(item)
                              setModal(false)
                              }}
                          style={{marginVertical:width*0.05,marginHorizontal:width*0.05,alignSelf:'center',borderBottomWidth:1,borderStyle:(Platform.OS='ios')?'solid':'dashed',borderBottomColor:colors.secondary}}>
                               {/* <Image source={item.imageUri} style={{width:width*0.28,height:width*0.28,borderRadius:width*0.28,}}/> */}
                               <AppText textAlign="center" children={item.title}/>
                          </TouchableOpacity>
                           
                        );
                      }}
                />
                </View>
            </Modal>
            </>
);
}

export default AppPicker;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
},
item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});