import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './homeNavigation';
import { MaterialCommunityIcons,FontAwesome,Ionicons } from '@expo/vector-icons';

import routes from './routes';
import { useTheme } from '../hooks/ThemeContext';
import SearchNavigator from './searchNavigation';
const Tab = createBottomTabNavigator();
const AppNavigator = ({width})=>{
  const {theme}=useTheme();
return (
  <>
    <Tab.Navigator
    // barStyle={{backgroundColor: '#694fad', }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === routes.HOME_TAB) {
          // iconName = focused ? 'home-circle' : 'home-circle-outline';
          // size = focused ? 30: 24;
          return <FontAwesome name="home" size={24} color="black" />
        }

      else if (route.name === routes.MAIN_SEARCH_TAB) {
          return <Ionicons name="md-search-circle" size={24} color="black" />
        }
  
  
        // You can return any component that you like here!
        return (
        <MaterialCommunityIcons name={iconName} size={25} color={color} />
        );
      },
      // tabBarShowLabel:false,
      // tabBarActiveTintColor: theme.white=='#fff'?theme.secondary:theme.dark,
      // tabBarInactiveTintColor: theme.white=='#fff'?theme.primary:'#aaa',
      // tabBarHideOnKeyboard:true,
      // pressColor: 'gray',
      // tabBarInactiveBackgroundColor:theme.white,
      // tabBarActiveBackgroundColor:theme.white
      })}
      >
      <Tab.Screen name={routes.HOME_TAB} component={HomeNavigator} options={{headerShown:false}}/>
      <Tab.Screen name={routes.MAIN_SEARCH_TAB} component={SearchNavigator} options={{headerShown:false,tabBarLabel:"Search"}}/>
      
    </Tab.Navigator>
    </>
  )
}


export default AppNavigator;