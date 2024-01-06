import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../../config/colors';
import useAuth from '../../auth/useAuth';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import routes from '../../navigation/routes';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";


WebBrowser.maybeCompleteAuthSession();

function GetStarted({navigation}) {
    const {user,width,height}=useAuth();
    const [accessToken,setAccessToken]=useState(null);
//   const [myUser,SetMyUser]=useState(null);
//   const [request,response,promptAsnc]= Google.useAuthRequest({
 
//   });

//   useEffect(()=>{
//     if(response?.type == "success"){
//       setAccessToken(response.authentication.accessToken);
//       accessToken&& fecthUserInfo();
//     }
//   },[response,accessToken])

//   async function fecthUserInfo(){
//   let response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
//     headers:{
//       Authorization:`Bearer ${accessToken}`
//     }
//   });
//   const useInfo = await response.json();
//   SetMyUser(useInfo)
//   }







return (
<View 
style={styles.container}>
    <View style={{width:width,justifyContent:'flex-end',alignItems:'flex-start',padding:'5%'}}>
        <View style={{width:width*0.6,alignSelf:'center',alignItems:'center',justifyContent:'center',overflow:'hidden',marginBottom:'5%'}}>
        <Image source={require('../../assets/imgs/logo6.png')} style={{width:width*0.7,height:width*0.7}}/>

        </View>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.1} color={colors.primary}>Welcome</AppText>
        <AppText fontFamily={"NunitoSemiBold"} fontSize={width*0.04} color={colors.primary}>Would you like to:</AppText>
        <AppButton text={'Connect with Google'} textColor={colors.secondary} backgroundColor={colors.primary} marginVertical='2%'/>
        <AppButton text={'Connect with Username'} textColor={colors.secondary} backgroundColor={colors.primary} marginVertical='2%'
        onPress={()=>{
            navigation.navigate(routes.SIGN_IN)
        }}/>

        
    </View>
</View>
);
}

export default GetStarted;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.secondary
}
});