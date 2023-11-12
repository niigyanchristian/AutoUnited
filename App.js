import { useEffect, useState,useCallback } from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AuthNavigator from './app/navigation/authNavigator';
import AppNavigator from './app/navigation/appNavigation';
import jwtDecode from 'jwt-decode';

import * as SplashScreen from 'expo-splash-screen';
import NetInfo,{useNetInfo} from '@react-native-community/netinfo';
import OfflineNotice from './app/components/OfflineNotice';
import { useFonts } from 'expo-font';
import {ThemeProvider} from './app/hooks/ThemeContext'
import AppStatusBar from './app/components/AppStatusBar';

export default function App() {
  const window = Dimensions.get('window');
  const [width,setWidth] = useState(window.width);
  const [height,setHeight] = useState(window.height);
  const [user,setUser]=useState();
  const [isReady,setIsReady]= useState(false);

  const NetInfo = useNetInfo();
  let [fontsLoaded] = useFonts({
    "PoppinsRegular":require('./app/assets/fonts/Poppins-Regular.ttf'),
    "PoppinsSemiBold":require('./app/assets/fonts/Poppins-SemiBold.ttf'),
  });

  



  const restoreToken = async ()=>{
   const token = await authStorage.getToken();
    if(!token) return;
    setUser(jwtDecode(token).found);
  }
  useEffect(() => {
    async function prepare() {
        try {
            await SplashScreen.preventAutoHideAsync();
            await restoreToken();
        } catch (error) {
            // console.log("Error loading app", error);
        } finally {
            setIsReady(true);
        }
    }
    prepare();
}, []);

const onNavigationContainerReady = useCallback(async () => {
  // console.log(isReady && fontsLoaded);
    if (isReady && fontsLoaded) await SplashScreen.hideAsync();
}, [isReady]);






if (!isReady) return null;
if (!fontsLoaded) return null;

  return (
    <AuthContext.Provider value={{user,setUser,width,height }}>
     <ThemeProvider>
      {/* <OfflineNotice/> */}
     <NavigationContainer onReady={onNavigationContainerReady}>
      <AppStatusBar/>
      {!user ? <AppNavigator width={width}/>: <AuthNavigator/>}
     </NavigationContainer>
     <OfflineNotice/>
     </ThemeProvider>
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({
  
});
