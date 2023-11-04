import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome,AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppTextInput from './AppTextInput';

function AppHeader({navigation}) {
    const {width,height} = useAuth();
    const {theme} = useTheme();
return (
<View style={[styles.header,{backgroundColor:theme.white,width:width,justifyContent:'space-between'}]}>
<AntDesign name="arrowleft" size={width*0.08} color={theme.primary} />
    <AppTextInput placeholder={"Search"}/>
<TouchableOpacity 
// style={{flex:1}}
onPress={()=>
    navigation.navigate(routes.HOME_TAB,{
    screen:routes.SEARCH,
    })
    }>
    <FontAwesome name="search" size={width*0.08} color={theme.primary} />
</TouchableOpacity>

    <AntDesign name="shoppingcart" size={width*0.08} color={theme.primary} />
</View>
);
}

export default AppHeader;
const styles = StyleSheet.create({
    subContainer:{
        flexDirection:'row',justifyContent:'space-between',alignItems:'center',
        borderWidth:1
        // backgroundColor:theme.primary,
    },
    header:{
        backgroundColor: 'red', // Set the background color of the container
        shadowColor: '#000',     // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y) for iOS
        shadowOpacity: 0.5,      // Shadow opacity for iOS
        shadowRadius: 2,         // Shadow radius for iOS
        elevation: 5,            // Elevation for Android (controls shadow)
        // padding: 16,
        padding:'2%',flexDirection:'row',alignItems:'center',
    }
});