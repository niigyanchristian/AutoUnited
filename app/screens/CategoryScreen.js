import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

function CategoryScreen(props) {
return (
<View style={styles.container}>
    <AppText>Category</AppText>
</View>
);
}

export default CategoryScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});