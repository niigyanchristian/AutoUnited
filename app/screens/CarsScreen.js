import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

function CarsScreen(props) {
return (
<View style={styles.container}>
    <AppText>Vehicle management Screen</AppText>
</View>
);
}

export default CarsScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});