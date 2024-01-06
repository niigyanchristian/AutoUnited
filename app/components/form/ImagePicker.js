import { StyleSheet, Text,Image, View,TouchableOpacity,Modal, ImageBackground,TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../AppText';
import useAuth from '../../auth/useAuth';
import { useTheme } from '../../hooks/ThemeContext';
import AppFormModal from './AppFormModal';
import useImage from '../../hooks/useImage';


export default function Image1({getImageUrl,clearImage,scaleHeight=1,scaleWidth=1}) {
  const [modalOpen,setModalOpen]= useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const {width} = useAuth();
  const {theme}=useTheme();

  let openImagePickerAsync = async () => {
    setModalOpen(false)
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect: [4, 3],
      quality: 1,
    });
    if (pickerResult.canceled === true) {
      return;
    }
    getImageUrl(pickerResult.assets[0].uri);
    setSelectedImage({ localUri: pickerResult.assets[0].uri });
  };

  let openCameraPickerAsync = async () => {
    setModalOpen(false)
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();  
    if (pickerResult.canceled === true) {
      return;
    }
    getImageUrl(pickerResult.assets[0].uri);
    setSelectedImage({ localUri: pickerResult.assets[0].uri });
  };

  // if(clearImage){
  //   setSelectedImage(null);
  // }

  const deletePhoto= ()=>{
    setSelectedImage(null);
    setModalOpen(false);
    getImageUrl(null);
  }

  
      return (
          <View style={styles.imageContainer}>
            <TouchableOpacity
            style={{backgroundColor:theme.light,height:width*0.3*scaleHeight,width:width*0.3*scaleWidth,borderRadius:10,marginVertical:10,overflow:'hidden',borderWidth:1,borderColor:theme.primary,justifyContent:'center',alignItems:'center'}}
            onPress={()=> setModalOpen(true)}>
              {selectedImage !== null && !clearImage &&
              <Image  style={[styles.imageSelector,{width:width*0.3*scaleWidth,height:width*0.3*scaleHeight,borderRadius:10,backgroundColor:theme.light,}]} source={{ uri: selectedImage.localUri }}/>}
              {selectedImage === null && 
              <>
             <Ionicons style={[styles.imageSelectorIcon]} name="person-add-outline" size={30} color="#ddd" />
             </>
             }
                </TouchableOpacity>

                <AppFormModal onPress_ChoosePhoto={async ()=>{
                  setModalOpen(false);
                  const image = await useImage().openImagePickerAsync();
                  getImageUrl(image);
                  setSelectedImage({ localUri: image })
                }} 
                onPress_DeletePhoto={()=>{
                  setSelectedImage(null);
                  setModalOpen(false);
                  getImageUrl(null);
                }}
                onPress_TakePhoto={async ()=>{
                  setModalOpen(false);
                  const image = await useImage().openCameraPickerAsync();
                  getImageUrl(image);
                  setSelectedImage({ localUri: image })
                }} 
                selectedImage={selectedImage} setModalOpen={setModalOpen} modalOpen={modalOpen}/>
          </View>
    
      );
    }
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
})


      

   


  
