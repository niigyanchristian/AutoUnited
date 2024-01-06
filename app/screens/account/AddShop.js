import React,{useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';

import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import pickersData from '../../config/pickersData';
import useAuth from '../../auth/useAuth';

import useLocation from '../../hooks/useLocation';
import { useTheme } from '../../hooks/ThemeContext';
import useActiveScreenFunc from '../../hooks/useActiveScreenFunc';
import AppText from '../../components/AppText';
import colors from '../../config/colors';
import useApi from '../../hooks/useApi';
import shops from '../../api/shops';
import users from '../../api/users';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const AddShopSchema =yup.object({
  shop_name: yup.string().required().min(4),
  shop_email: yup.string().required().min(4),
  city: yup.string().required().min(4),
  discription: yup.string().required().min(10),
  businessNumber: yup.string().required("required").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long")
})




export default function AddShop({navigation}) {
  const {user,width,height,logIn} = useAuth();

  const updateUserProfileApi = useApi(users.updateUserProfile);
  const addshopApi = useApi(shops.addshop);
  const [active,setActive]=useState(false);
  const [location,setLocation] = useState();

  useActiveScreenFunc().FocusedAndBlur(async () => {
    const res=await useLocation().getLocation();
    setLocation(res);
  },()=>null)

  




  const handleSubmit = async (shopInfo) => {
    console.log("Entered",shopInfo)
    const reponse =await addshopApi.request(shopInfo,user.token);
    console.log(reponse.data)
    console.log("The final=>",reponse.data.results[0].shop_id);
    let userObject= user
      // Parse the JSON string
      // var jsonData = JSON.parse(user);
      console.log(1,user)
      // Change the shop_id
      user.shop_id = reponse.data.results[0].shop_id;
      console.log(2,user)

      // Stringify the modified JSON
      // var modifiedJsonString = JSON.stringify(jsonData);
      console.log('====================================');
      console.log(user,user.user_id,user.token);
      console.log('====================================');
      const { user_id,token,is_shop_admin,user_status,user_image, ...userObjectWithoutUserId } = userObject;

      const newInfo =await updateUserProfileApi.request(userObjectWithoutUserId,user.user_id,user.token);
      console.log("newInfo=>",newInfo.data)
      logIn(newInfo.data.results);
  };

  const titleComponent = (text)=>{
    return(
      <AppText marginLeft='3%' fontSize={width*0.045} fontFamily='NunitoExtraBold'>{text}</AppText>
    )
  }
  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : null}
  style={{ flex: 1 }}
>
      <SafeAreaView style={{backgroundColor:colors.primary,height:'100%',justifyContent:'center'}}>
      <Formik
      initialValues={{shop_name:'',shop_email:'',shop_branch:'',shop_address:'',shop_phone:'',shop_website:'',shop_description:''}}
      // validationSchema={AddShopSchema}
      onSubmit={async (values, actions)=>{
        // setActive(true);
        console.log("see",values)
        handleSubmit({...values,shop_lat:location.latitude,shop_long:location.longitude});
        // actions.resetForm();
             
      }}>
      {(props)=>(
        <ScrollView>
          <View style={styles.formContainer}>
         
          <View style={[styles.content,{}]}>
            
            <Animatable.View style={{marginTop:'10%'}} animation="fadeInUp" duration={2000} delay={500}>
            {/* Shop shopName */}
            {titleComponent('Shop Name:')}
            <AppTextInput
                 placeholder='Shop Name:'
                 textContentType='givenName'
                 onChangeText={props.handleChange('shop_name')}
                 onBlur={props.handleBlur('shop_name')}
                 value={props.values.shop_name}
                 touched={props.touched.shop_name}
                 errors={props.errors.shop_name}
                 IconName="greenhouse"
                 paddingVertical={5}
                 borderRadius={30}
                 />

            {/* Email */}
            {titleComponent('Shop Email:')}
              <AppTextInput
                 placeholder='onedon@gmail.com'
                 textContentType='emailAddress'
                 onChangeText={props.handleChange('shop_email')}
                 onBlur={props.handleBlur('shop_email')}
                 value={props.values.shop_email}
                 touched={props.touched.shop_email}
                 errors={props.errors.shop_email}
                 IconName="crop-landscape"
                 paddingVertical={5}
                 borderRadius={30}
                 />

            
           
            {/* Shop Number */}
            {titleComponent('Shop Number:')}
              <AppTextInput
                 placeholder='+23324897485'
                 textContentType='telephoneNumber'
                 keyboardType='numeric'
                 onChangeText={props.handleChange('shop_phone')}
                 onBlur={props.handleBlur('shop_phone')}
                 value={props.values.shop_phone}
                 touched={props.touched.shop_phone}
                 errors={props.errors.shop_phone}
                 paddingVertical={5}
                 borderRadius={30}
                 />
              {/* Adress */}
              {titleComponent('Shop Adress:')}
              <AppTextInput
                 placeholder='GZ-004-3043'
                 textContentType='addressCity'
                 onChangeText={props.handleChange('shop_address')}
                 onBlur={props.handleBlur('shop_address')}
                 value={props.values.shop_address}
                 touched={props.touched.shop_address}
                 errors={props.errors.shop_address}
                 IconName="city"
                 paddingVertical={5}
                 borderRadius={30}
                 />

                 {/* Shop shopName */}
            {titleComponent('Shop Branch:')}
            <AppTextInput
                 placeholder='Accra Branch'
                 textContentType='givenName'
                 onChangeText={props.handleChange('shop_branch')}
                 onBlur={props.handleBlur('shop_branch')}
                 value={props.values.shop_branch}
                 touched={props.touched.shop_branch}
                 errors={props.errors.shop_branch}
                 paddingVertical={5}
                 borderRadius={30}
                 />

                 {/* Website */}
                 {titleComponent('Shop Website:')}
              <AppTextInput
                 placeholder='https://onedon.com'
                 textContentType={'URL'}
                 onChangeText={props.handleChange('shop_website')}
                 onBlur={props.handleBlur('shop_website')}
                 value={props.values.shop_website}
                 touched={props.touched.shop_website}
                 errors={props.errors.shop_website}
                 paddingVertical={5}
                 borderRadius={30}
                 />
             
              {/* description */}
              {titleComponent('Shop Description:')}
              <AppTextInput
                 placeholder='Info About Your Shop'
                 onChangeText={props.handleChange('shop_description')}
                 onBlur={props.handleBlur('shop_description')}
                 value={props.values.shop_description}
                 touched={props.touched.shop_description}
                 errors={props.errors.shop_description}
                 multiline={true}
                 paddingVertical={5}
                 borderRadius={10}
                 />
                 {location?(<AppButton text="Add" width='100%'
                 active={active}
                 onPress={()=>{
                  props.handleSubmit()
                  }}/>):(<AppButton text="Getting Location..." width='100%' paddingHorizontal='20%'/>)}
                 </Animatable.View>
          </View>
          </View>
        </ScrollView>
      )}
      </Formik>
    </SafeAreaView>
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  one:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'red',
   
  },
  modalContainer:{
    flex:1,
    backgroundColor:'#00000033',
    justifyContent:'center',
    alignItems:'center'
  },
  formContainer:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
},
content:{
    flex:1,
    justifyContent:'center',
    width:'95%',
    // shadowOpacity:1,
    marginBottom:10,
},
input:{
    backgroundColor:'#eee',
    // borderBottomColor:'#50C2C9',
    padding:10,
    marginBottom:10,
    fontSize:18,
    borderRadius:27,
},
inputdiscription:{
    backgroundColor:'#eee',
    minHeight:60,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:0,
    marginBottom:15,
},
parker:{
    backgroundColor:'#eee',
    marginBottom:20,
    fontSize:18,
    borderRadius:27,
},
})