import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

function FirstScreen(props) {
return (
<View style={styles.container}>
    <AppText>FIRST Scren</AppText>
</View>
);
}

export default FirstScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});