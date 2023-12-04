import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './homeNavigation';
import { MaterialCommunityIcons,FontAwesome,Ionicons } from '@expo/vector-icons';

import routes from './routes';
import { useTheme } from '../hooks/ThemeContext';
import SearchNavigator from './searchNavigation';
import AccountNavigator from './accountNavigation';
import useAuth from '../auth/useAuth';
import SearchButton from './SearchButton';
import CarsNavigator from './carsNavigation';
const Tab = createBottomTabNavigator();
const AppNavigator = ()=>{
  const {theme}=useTheme();
  const {width}=useAuth();
return (
  <>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === routes.HOME_TAB) {
          return <Ionicons name={focused?"ios-home":"ios-home-outline"} size={width*0.08} color={theme.primary} />
        }
      else if (route.name === routes.MAIN_SEARCH_TAB) {
          return <Ionicons name={focused?"md-search-circle":"md-search-circle-outline"} size={width*0.095} color={theme.primary} />
        }
      else if (route.name === routes.CARS_TAB) {
          return <Ionicons name={focused?"md-car-sport":"md-car-sport-outline"} size={width*0.09} color={theme.primary} />
        }
      else if (route.name === routes.ACCOUNT_TAB) {

          return  <MaterialCommunityIcons name={focused?"account-circle":"account-circle-outline"} size={width*0.08} color={theme.primary} />
        }
  
  
        // You can return any component that you like here!
        return (
        <MaterialCommunityIcons name={iconName} size={25} color={color} />
        );
      },
      // tabBarShowLabel:false,
      tabBarActiveTintColor: theme.primary,
      tabBarInactiveTintColor: theme.primary,
      // tabBarInactiveBackgroundColor:theme.secondary,
      // tabBarActiveBackgroundColor:theme.secondary,
      })}
      >
      <Tab.Screen name={routes.HOME_TAB} component={HomeNavigator} options={{headerShown:false,tabBarLabel:"Home"}}/>
      <Tab.Screen name={routes.MAIN_SEARCH_TAB} component={SearchNavigator} options={{headerShown:false,tabBarLabel:"Search"}}/>
      <Tab.Screen name={routes.CARS_TAB} component={CarsNavigator} options={{headerShown:false,tabBarLabel:"Cars"}}/>
      <Tab.Screen name={routes.ACCOUNT_TAB} component={AccountNavigator} options={{headerShown:false,tabBarLabel:"Account"}}/>
      
    </Tab.Navigator>
    </>
  )
}


export default AppNavigator;