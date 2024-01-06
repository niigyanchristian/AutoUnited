import React from 'react';
import { View, StyleSheet,Modal,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import useAuth from '../../auth/useAuth';
import { useTheme } from '../../hooks/ThemeContext';
import AppText from '../AppText';
import AppButton from '../AppButton';

function AppFormModal({setModalOpen,onPress_ChoosePhoto,onPress_DeletePhoto,onPress_TakePhoto,selectedImage,modalOpen}) {
    const {width,height}=useAuth();
    const {theme}=useTheme();
return (
    <Modal
    animationType={'slide'}
    transparent={true}
    visible={modalOpen}
    >
      <TouchableWithoutFeedback
      onPress={()=> setModalOpen(false)}>
      <View style={[styles.modalContainer,{backgroundColor:theme.modalBackground,}]}>
        <View style={[styles.modalContent]}>
        {selectedImage !== null &&
        <TouchableOpacity onPress={onPress_DeletePhoto} style={[styles.deletePhoto,{backgroundColor:theme.white,borderBottomColor:theme.secondary}]}>
          <AppText children={"Delete Photo"} color={theme.secondary} fontSize={width*0.05}/>
            </TouchableOpacity>
            }

            <TouchableOpacity onPress={onPress_TakePhoto} style={[styles.takePhoto,{backgroundColor:theme.white,}]}>
              <AppText children={"Take Photo"} fontSize={width*0.05}/>
              {/* <Text style={styles.takePhotoText}></Text> */}
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress_ChoosePhoto} style={[styles.choosePhoto,{backgroundColor:theme.white,}]}>
            <AppText children={"Choose Photo"} fontSize={width*0.05}/>
              {/* <Text style={styles.choosePhotoText}></Text> */}
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> setModalOpen(false)} style={[styles.cancel,{backgroundColor:theme.white}]}>
            <AppText children={"Cancel"} fontSize={width*0.05}/>
              {/* <Text style={styles.cancelPhotoText}></Text> */}
            </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
);
}

export default AppFormModal;
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'flex-end'
      },
      modalContent:{
        justifyContent:'center',
        alignItems:'center',
        // height:'30%', 
        width:'90%',
        marginHorizontal:'5%',
        borderTopLeftRadius:15,
        borderTopRightRadius:15, 
        marginBottom:'5%',
       backgroundColor:'red,',
       overflow:'hidden'
      },
      deletePhoto:{
        width:'100%', 
        justifyContent:'center',
        alignItems:'center', 
        borderTopLeftRadius:15,
        borderTopRightRadius:15, 
        // paddingVertical:'5%',
        padding:'5%',
        borderBottomWidth:0.5,
      },
      takePhoto:{
        width:'100%', 
        justifyContent:'center',
        alignItems:'center', 
        padding:'5%',
      },
      choosePhoto:{
        width:'100%', 
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        padding:'5%',
      },
      cancel:{
        padding:'5%',
        width:'100%', 
        justifyContent:'center',
        alignItems:'center',
        marginTop:'1%',
        borderRadius:15,
        
      }, 
    imageContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
  },
    imageSelectorIcon:{
        // position:'absolute',
  
        // top:'35%',
        // left:'37%',
        
    },
  
    imageSelectorText:{
        textAlign:'center',
        alignItems:'center',
        fontSize:18,
        top:'55%',
        color:'#333',
    },
    
    imageSelector:{
        borderWidth:2,
        resizeMode:'contain',
        borderRadius:5
    },
  
});