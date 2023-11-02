import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import { FontAwesome,AntDesign,Ionicons } from '@expo/vector-icons';


function SearchResultsScreen(props) {
    const {width,height}=useAuth()
return (
<View style={styles.container}>
<View style={{padding:'5%',paddingVertical:'3%',flexDirection:'row',alignItems:'center',backgroundColor:'orange',}}>
<Ionicons name="md-arrow-back-sharp" size={width*0.09} color="black" />
<TouchableOpacity 
// onPress={()=>
//     navigation.navigate(routes.HOME_TAB,{
//     screen:routes.CATEGORY,
//     })
//     }
    style={{backgroundColor:'red',padding:'1%',marginHorizontal:'2%',flex:1,paddingHorizontal:'2%',borderRadius:15}}>
    <AppText fontFamily={"PoppinsSemiBold"}>Category</AppText>

</TouchableOpacity>
<TouchableOpacity 
// style={{flex:1}}
// onPress={()=>
//     navigation.navigate(routes.HOME_TAB,{
//     screen:routes.SEARCH,
//     })
//     }
    >
    <FontAwesome name="search" size={width*0.08} color="black" />
</TouchableOpacity>
    <AntDesign name="shoppingcart" size={width*0.08} color="black" />
    </View>


    <View>
        
    </View>
</View>
);
}

export default SearchResultsScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center'
}
});