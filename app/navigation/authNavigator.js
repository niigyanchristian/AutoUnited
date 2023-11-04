import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import controler from '../controler/controler';
import routes from './routes';
import { useTheme } from '../hooks/ThemeContext';

const Stack = createNativeStackNavigator();

const AuthNavigator = () =>{
  const {theme}=useTheme()
return(
    <Stack.Navigator>
      {/* <Stack.Screen name='Loading' component={controler.LoadingStackScreen} options={{headerShown:false}}/> */}
      <Stack.Screen name={routes.SIGN_IN} component={controler.SignInStackScreen} options={{headerShown:false,}}/>
      <Stack.Screen name={routes.SIGN_UP} component={controler.SignUpStackScreen} options={{headerShown:false,}}/>
      {/* <Stack.Screen name={routes.START} component={controler.GetStartedStackScreen} options={{headerShown:false,animation:'slide_from_right'}}/>
      <Stack.Screen name='Forgot' component={controler.ForgotPasswordStackScreen} options={{headerShown:false,animation:'slide_from_right'}}/>
  
      <Stack.Screen name='Login' component={controler.LoginStackScreen} options={{headerShown:false,animation:'fade'}}/>
      <Stack.Screen name='SignUp' component={controler.SignUpStackScreen} options={{headerShown:false,animation:'fade'}}/> */}
  
    </Stack.Navigator>
  )
}
 export default AuthNavigator; 