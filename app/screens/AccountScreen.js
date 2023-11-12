import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AppText from '../components/AppText';
import { useTheme } from '../hooks/ThemeContext';

function AccountScreen(props) {
    const  {toggleTheme}= useTheme();
return (
<View style={styles.container}>
    <AppText>Account</AppText>
    <Button onPress={toggleTheme} title='Toggle'/>
</View>
);
}

export default AccountScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});