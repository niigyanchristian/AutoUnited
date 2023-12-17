import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';
function AppText({numberOfLines,ellipsizeMode,children,onPress,disabled=false,...others}) {
    const {width}=useAuth();
    const {theme}=useTheme()
return (
<Text disabled={disabled} onPress={onPress} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} style={[{fontSize:width*0.04,color:theme.dark,textAlign:'left',fontFamily: "NunitoMedium",...others}]}>{children}</Text>
);
}

export default AppText;
const styles = StyleSheet.create({
container:{}
});