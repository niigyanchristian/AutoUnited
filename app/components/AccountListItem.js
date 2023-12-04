import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { MaterialIcons,MaterialCommunityIcons,Ionicons,FontAwesome } from '@expo/vector-icons';
import AppText from './AppText';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';

function AccountListItem({Icon,title}) {
    const {width} = useAuth();
return (
<TouchableOpacity style={{flexDirection:'row',alignItems:'center',width:'95%',padding:'5%'}}>
    {Icon}
    <AppText flex={1} marginLeft={'2%'}>{title}</AppText>
    <MaterialIcons name="keyboard-arrow-right" size={width*0.07} color={colors.dark} />
</TouchableOpacity>
);
}

export default AccountListItem;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});