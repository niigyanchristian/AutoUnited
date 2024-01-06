import React, { useState } from 'react';
import { Dimensions,View, StyleSheet, Text, ScrollView, Image, SafeAreaView, TouchableWithoutFeedback, Modal,Pressable, TouchableOpacity } from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';


import AppTextInput from '../components/AppTextInput';
import AppTextInputContact from '../components/AppTextInputContact';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import usersApi from '../api/users';
import useImage from '../hooks/useImage';
import useApi from '../hooks/useApi';

function FillProfileScreen(props) {
    const {width,user,logIn}=useAuth();
    const [modalOpen,setModalOpen]= useState(false);
    const [active,setActive]= useState(false);
    const updateUserProfileApi = useApi(usersApi.updateUserProfile);
    const [imageUri,setImageUri]= useState(user.user_image);




    const handleSubmit = async (values) => {
      let data = {
        username:values.username,
        first_name:values.first_name,
        last_name:values.last_name,
        user_email:values.user_email,
        user_phone:values.user_phone
      }
    

      const result = await updateUserProfileApi.request(data,user.user_id,user.token);

      if (!result.ok) {
          alert(result.data.errMsg);
          setActive(false)
          return;
      } else {
          logIn(result.data.results);
          setActive(false);
      }
  };
  
return (
  <SafeAreaView style={[styles.container,{width:width,flex:1}]}>
  <ScrollView contentContainerStyle={[{width:width}]}>
  <Animatable.View animation="fadeInUp" duration={2000} delay={500} style={styles.container}>
      <Pressable 
      onPress={()=>setModalOpen(true)}
      style={{height:width*0.25,width:width*0.25,backgroundColor:colors.lightDark,borderRadius:width*0.25,marginTop:'20%',justifyContent:'flex-end',alignItems:'center',position:'relative'}}>
        
        {!imageUri&&<Image source={require('../assets/imgs/me.jpg')} style={{resizeMode:'cover',height:width*0.25,width:width*0.25,borderRadius:width*0.25}}/>}
        {imageUri&&<Image source={{uri:imageUri}} style={{resizeMode:'cover',height:width*0.25,width:width*0.25,borderRadius:width*0.25}}/>}
        <MaterialIcons name="mode-edit" size={20} color={colors.primary} 
        style={{position:'absolute',right:'10%',padding:3,backgroundColor:colors.secondary,borderRadius:5}}/>

      </Pressable>
      <Formik
          initialValues={{
            username:user.username,
            first_name:user.first_name??"",
            last_name:user.last_name??"",
            user_email:user.user_email??"",
            user_phone:user.user_phone??""}}
          // validationSchema={ReviewSchema}
          onSubmit={async (values,actions)=>{
            setActive(true)
            handleSubmit(values)
        
        }}
          >
            {(props)=>(
              <View style={{width:'90%',marginTop:'5%'}}>
                  <AppTextInput placeholder={'Username'}
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  value={props.values.username}
                  touched={props.touched.username}
                  errors={props.errors.username}
                  />
                  <AppTextInput placeholder={'First Name'}
                  onChangeText={props.handleChange('first_name')}
                  onBlur={props.handleBlur('first_name')}
                  value={props.values.first_name}
                  touched={props.touched.first_name}
                  errors={props.errors.first_name}
                  />
                  <AppTextInput placeholder={'Last Name'}
                  onChangeText={props.handleChange('last_name')}
                  onBlur={props.handleBlur('last_name')}
                  value={props.values.last_name}
                  touched={props.touched.last_name}
                  errors={props.errors.last_name}
                  />
                  
                  <AppTextInput placeholder={'Email'}
                  onChangeText={props.handleChange('user_email')}
                  onBlur={props.handleBlur('user_email')}
                  value={props.values.user_email}
                  touched={props.touched.user_email}
                  errors={props.errors.user_email}
                  />
                  <AppTextInputContact placeholder={'Phone number'}
                  onChangeText={props.handleChange('user_phone')}
                  onBlur={props.handleBlur('user_phone')}
                  value={props.values.user_phone}
                  touched={props.touched.user_phone}
                  errors={props.errors.user_phone}/>
                  <AppButton text={'Continue'}
                  active={active}
                  onPress={props.handleSubmit}/>
              </View>

            )}</Formik>
      </Animatable.View>
  </ScrollView>



  <Modal
                  animationType={'slide'}
                  transparent={true}
                  visible={modalOpen}>
                    <TouchableWithoutFeedback
                    onPress={()=>{
                        setModalOpen(false);
                    }}>
                  <View style={styles.modalContainer}>
                  <TouchableWithoutFeedback>
                  <View style={{backgroundColor:'#ffff',justifyContent:'center',alignItems:'center',height:150,borderTopLeftRadius:15,borderTopRightRadius:15, }}>
                      <Pressable 
                      onPress={async ()=>{
                        setModalOpen(false);
                       const image =await useImage().openCameraPickerAsync()
                        setImageUri(image)
                        
                      }} 
                      style={styles.takePhoto1}>
                        <Text style={styles.PhotoText}>Take Photo</Text>
                      </Pressable>
                      <Pressable 
                      onPress={async ()=>{
                        setModalOpen(false);
                       const image =await useImage().openImagePickerAsync()
                        setImageUri(image)
                        
                      }} 
                      style={styles.choosePhoto}>
                        <Text style={styles.PhotoText}>Choose Photo</Text>
                      </Pressable>
                      
                      <Pressable onPress={()=>setModalOpen(false)}  style={styles.cancel}>
                        <Text style={styles.PhotoText}>Cancel</Text>
                      </Pressable>
                  </View>
                  </TouchableWithoutFeedback>
                </View>
                </TouchableWithoutFeedback>
                </Modal>
  </SafeAreaView>
);
}

export default FillProfileScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
  backgroundColor:colors.primary,
 alignItems:'center',
//  flex:1
},
scrowCard:{
    flexDirection:'row',
    alignItems:'center',
      width:'100%',
      borderRadius:10,
      borderWidth:2,
      borderColor:colors.secondary,
      backgroundColor:'#eee',
      marginBottom:20
    //   marginVertical:5,
  },
  modalContainer:{
    flex:1,
    backgroundColor:'#0000005d',
    justifyContent:'flex-end'
  },
  modalContent:{
    justifyContent:'center',
    alignItems:'center',
    height:'30%', 
    width:'90%',
    marginHorizontal:'5%',
    borderTopLeftRadius:15,
    borderTopRightRadius:15, 
    marginBottom:'10%',
    backgroundColor:'white'
  },
  PhotoText:{
    fontSize:25,
    borderBottomWidth:1,
    borderBottomColor:'#eeee',
    padding:5
  },
 
  deletePhotoText:{
    fontSize:25,
    color:'red',
    
  },

});