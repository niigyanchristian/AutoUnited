import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, FlatList,Text, Image } from 'react-native';
import AppText from '../AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from '../AppButton';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import { useTheme } from '../../hooks/ThemeContext';



  

 


function AppPicker({items,placeholder,onSelectedItem,selectedItem,disabled=false,...otherprop}) {
    const [selectedId, setSelectedId] = useState(null);
    const [modal,setModal]=useState(false);
    const {width} =useAuth();
    const {theme}=useTheme();

    
return (
    <>
   
            <TouchableOpacity
            style={{backgroundColor:theme.white=='#fff'?theme.light:theme.white, paddingVertical:10,marginVertical:10,borderRadius:10,flexDirection:'row',paddingHorizontal:10,alignItems:'center',...otherprop}}
            disabled={disabled}
            onPress={()=>setModal(true)}>
                <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                {/* <MaterialIcons style={{marginRight:10}} size={25} name='category'/> */}
                  <AppText fontSize={15} color={selectedItem ? theme.dark : 'red'} children={selectedItem ? selectedItem.label : placeholder}/>
                </View>
                <MaterialCommunityIcons name="chevron-down" size={20} color={theme.dark}/>
            </TouchableOpacity>





            <Modal visible={modal}>
                <View style={{backgroundColor:theme.white=='#fff'?theme.white:theme.light,flex:1}}>
                {/* <AppText children="Hello"/> */}
                <View style={{alignItems:'center',marginBottom:'10%'}}>
                <AppButton text={"Close"} onPress={()=> setModal(false)}/>

                </View>
                <FlatList
                contentContainerStyle={{alignItems:'center'}}
                    data={items}
                    keyExtractor={item => item.id}
                    // extraData={selectedId}
                    renderItem={({ item }) => {
                        return (
                          <TouchableOpacity 
                          onPress={()=>{
                              onSelectedItem(item)
                              setModal(false)
                              }}
                          style={{marginVertical:'2%',alignSelf:'center',borderBottomWidth:0.5,borderBottomColor:theme.mediumDark}}>
                               
                               <AppText children={item.label}/>
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