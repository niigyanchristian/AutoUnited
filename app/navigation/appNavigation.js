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
const Tab = createBottomTabNavigator();
const AppNavigator = ()=>{
  const {theme}=useTheme();
  const {width}=useAuth();
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
          return <Ionicons name={focused?"ios-home":"ios-home-outline"} size={width*0.08} color={focused?theme.white:theme.secondary} />
        }

      else if (route.name === routes.MAIN_SEARCH_TAB) {
          return <Ionicons name={focused?"md-search-circle":"md-search-circle-outline"} size={width*0.08} color={focused?theme.white:theme.secondary} />
        }
      else if (route.name === routes.ACCOUNT_TAB) {

          return  <MaterialCommunityIcons name={focused?"account-circle":"account-circle-outline"} size={width*0.08} color={focused?theme.white:theme.secondary} />
        }
  
  
        // You can return any component that you like here!
        return (
        <MaterialCommunityIcons name={iconName} size={25} color={color} />
        );
      },
      // tabBarShowLabel:false,
      tabBarActiveTintColor: theme.white=='#fff'?theme.white:theme.secondary,
      tabBarInactiveTintColor: theme.white=='#fff'?theme.secondary:'#aaa',
      // tabBarHideOnKeyboard:true,
      // pressColor: 'gray',
      tabBarInactiveBackgroundColor:theme.primary,
      tabBarActiveBackgroundColor:theme.primary,
      })}
      >
      <Tab.Screen name={routes.HOME_TAB} component={HomeNavigator} options={{headerShown:false,tabBarLabel:"Home"}}/>
      <Tab.Screen
        name={routes.MAIN_SEARCH_TAB}
        component={SearchNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <SearchButton
              onPress={() => {
                navigation.navigate(routes.MAIN_SEARCH_TAB, {
                  screen: routes.MAIN_SEARCH, // Navigate to the first screen of the tab
                });
              }}
            />
          ),
          headerShown:false
        })}
      />

      <Tab.Screen name={routes.ACCOUNT_TAB} component={AccountNavigator} options={{headerShown:false,tabBarLabel:"Account"}}/>
      
    </Tab.Navigator>
    </>
  )
}


export default AppNavigator;