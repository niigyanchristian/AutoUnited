import React from 'react';
import { View, StyleSheet,StatusBar,Platform } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import useAuth from '../auth/useAuth';
import Constants from 'expo-constants';
import colors from '../config/colors';

function AppStatusBar(props) {
    const {theme}=useTheme();
    const {width,height}=useAuth();
    console.log('====================================');
    console.log(theme);
    console.log('====================================');

    if(Platform.OS=='ios'){
        return (
        <View style={{backgroundColor:theme.primary=='#44a0e3'?theme.dark:theme.white,height:Constants.statusBarHeight}}>
                <StatusBar
                    backgroundColor={theme.primary=='#44a0e3'?theme.dark:theme.white}
                    barStyle={"light-content"} //"dark-content"
                  />
              </View>
        );
    }else{
        return (
        <StatusBar
        backgroundColor={colors.secondary}// Change to your desired background color
        barStyle={"light-content"} // Change to "dark-content" for dark text
      />
        )
    }
}

export default AppStatusBar;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});