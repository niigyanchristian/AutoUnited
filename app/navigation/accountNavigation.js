import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import controler from '../controler/controler';
import routes from './routes';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useTheme } from '../hooks/ThemeContext';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const AccountNavigator = ({navigation,route}) =>{
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
      <Stack.Screen name={routes.ACCOUNT} component={controler.AccountStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.FILL_PROFILE} component={controler.FillProfileStackScreen} options={{headerShown:true,headerTitle:'Edit Profile'}}/>
    </Stack.Navigator>
  )
}

 export default AccountNavigator; 