import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { MaterialIcons,MaterialCommunityIcons,Ionicons,FontAwesome,FontAwesome5,AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import useAuth from '../auth/useAuth';
import AccountListItem from '../components/AccountListItem';
import routes from '../navigation/routes';

function AccountScreen({navigation}) {
    const {width,user,logOut} = useAuth();
return (
<View style={styles.container}>
<View style={{width:'100%',height:width*0.25,flexDirection:'row',alignItems:'center',borderColor:colors.mediumDark}}>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:width*0.16,height:width*0.16,borderRadius:width*0.16}} source={require('../assets/imgs/me.jpg')}/>
        </View>
        <View style={{flex:5,padding:'2%'}}>
            <AppText fontFamily='NunitoExtraBold' numberOfLines={1}>{user.first_name} {user.last_name}</AppText>
            <AppText fontSize={width*0.04} numberOfLines={1}>niigyan@gmail.com</AppText>
        </View>
        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'#0080001C',width:'100%',borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',alignItems:'center',flexDirection:'row',padding:'1%'}}>
            <MaterialIcons name="verified" size={width*0.05} color="green" />
                <AppText fontSize={width*0.035}>Verified</AppText>
            </View>
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:'2%'}}
        onPress={()=>navigation.navigate(routes.ACCOUNT_TAB,{
            screen:routes.FILL_PROFILE,
            })}>
        <AppText >Edit</AppText>
        <MaterialIcons name="keyboard-arrow-right" size={width*0.07} color={colors.dark} />
        </TouchableOpacity>
        </View>
    </View>
    <View style={{height:1,width:'95%',backgroundColor:colors.dark}}></View>


    <AccountListItem title={'Notifications'} Icon={<FontAwesome name="bell-o" size={width*0.07} color={colors.dark} />}/>
    {/* <AccountListItem title={'Payment Methods'} Icon={<MaterialIcons name="payment" size={width*0.07} color={colors.dark} />}/> */}
    
    <AccountListItem title={'History'} Icon={<MaterialCommunityIcons name="history" size={width*0.07} color={colors.dark} />}/>
    <View style={{height:1,width:'95%',backgroundColor:colors.dark}}></View>

    
    <AccountListItem title={'Help & Support'} Icon={<FontAwesome5 name="headset" size={width*0.07} color={colors.dark} />}/>
    <AccountListItem title={'Privacy'} Icon={<MaterialCommunityIcons name="shield-check-outline" size={width*0.07} color={colors.dark} />}/>
    <AccountListItem title={'Terms & Conditions'} Icon={<MaterialIcons name="list-alt" size={width*0.07} color={colors.dark} />}/>
    <AccountListItem title={'Invite friends'} Icon={<Ionicons name="share-social-outline" size={width*0.07} color={colors.dark} />}/>
    <View style={{height:1,width:'95%',backgroundColor:colors.dark}}></View>


    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',width:'95%',padding:'5%'}}
    onPress={()=>logOut()}>
    <AntDesign name="logout" size={width*0.07} color="black" />
    <AppText flex={1} marginLeft={'2%'}>Logout</AppText>
</TouchableOpacity>
</View>
);
}

export default AccountScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// marginTop:Constants.statusBarHeight,
// justifyContent:'center',
backgroundColor:colors.primary,
 alignItems:'center'
}
});