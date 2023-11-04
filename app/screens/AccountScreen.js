import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

function AccountScreen(props) {
return (
<View style={styles.container}>
    <AppText>Account</AppText>
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