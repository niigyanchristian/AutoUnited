import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import controler from '../controler/controler';
import routes from './routes';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useTheme } from '../hooks/ThemeContext';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeNavigator = ({navigation,route}) =>{
  const {theme}=useTheme();
  const tabHiddenRoutes = [];
  {Platform.OS=='ios'?null:React.useLayoutEffect(() => {
    // const routeName = getFocusedRouteNameFromRoute(route);
    tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))?navigation.setOptions({tabBarStyle: {display: 'none'}}):
     navigation.setOptions({tabBarStyle: {display: 'flex'}});
}, [navigation, route]);}
  return(
    <Stack.Navigator 
    screenOptions={{
      headerStyle:{
        backgroundColor:theme.white,
        color:'blue'
      },
      headerTitleAlign:'center'
    }}>
      <Stack.Screen name={routes.HOME} component={controler.HomeStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.CATEGORY} component={controler.CategoryStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.SEARCH} component={controler.SearchStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.SEARCH_RESULTS} component={controler.SearchResultsStackScreen} options={{headerShown:false,}}/>
      {/* 
      {/* 
      <Stack.Screen name={routes.SHOPS_CATEGORY} component={controler.ShopsCategoryStackScreen} options={{headerShown:true,headerTitle:"Shops",headerTintColor:theme.dark,headerTitleStyle:{color:theme.dark}}}/>
      <Stack.Screen name={routes.RECEIPT} component={controler.ReceiptStackScreen} options={{headerShown:true,headerTitle:"Receipt",headerTintColor:theme.dark,headerTitleStyle:{color:theme.dark}}}/>
      <Stack.Screen name={routes.VIEW_IMAGE} component={controler.ViewImageStackScreen} options={{headerShown:true,headerTitle:"",headerTintColor:'#fff',headerStyle:{backgroundColor:theme.black},headerTitleStyle:{color:theme.dark}}}/> */}
    </Stack.Navigator>
  )
}

 export default HomeNavigator; 