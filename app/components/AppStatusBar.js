import React from 'react';
import { View, StyleSheet,StatusBar,Platform } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import useAuth from '../auth/useAuth';
import Constants from 'expo-constants';
import colors from '../config/colors';

function AppStatusBar(props) {
    const {width,height}=useAuth();

    if(Platform.OS=='ios'){
        return (
        <View style={{backgroundColor:colors.primary,height:Constants.statusBarHeight}}>
                <StatusBar
                    backgroundColor={colors.primary}
                    barStyle={"light-content"} //"dark-content"
                  />
              </View>
        );
    }else{
        return (
        <StatusBar
        backgroundColor={colors.primary}// Change to your desired background color
        barStyle={"dark-content"} // Change to "dark-content" for dark text
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