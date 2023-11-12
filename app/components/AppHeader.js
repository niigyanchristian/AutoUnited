import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome,AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
import AppTextInput from './AppTextInput';
import routes from '../navigation/routes';

function AppHeader() {
    const {width,height} = useAuth();
    const {theme} = useTheme();
    const navigation = useNavigation();
return (
<View style={[styles.header,{backgroundColor:theme.white,width:width,justifyContent:'space-between'}]}>
<AntDesign name="arrowleft" size={width*0.08} color={theme.dark} onPress={()=>navigation.goBack()}/>
    <AppTextInput placeholder={"Search"} padding='1.5%'/>
<TouchableOpacity 
style={{marginHorizontal:'1%'}}
onPress={()=>
    navigation.navigate(routes.HOME_TAB,{
    screen:routes.SEARCH,
    })
    }>
    <FontAwesome name="search" size={width*0.07} color={theme.dark} />
</TouchableOpacity>
<TouchableOpacity 
style={{marginHorizontal:'1%'}}
onPress={()=>
    navigation.navigate(routes.HOME_TAB,{
    screen:routes.SEARCH,
    })
    }>
    <AntDesign name="shoppingcart" size={width*0.08} color={theme.dark} />
    </TouchableOpacity>
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