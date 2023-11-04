import React from 'react';
import { View, StyleSheet,TextInput,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import { useTheme } from '../hooks/ThemeContext';

function AppTextInput({placeholder,padding='2%',borderRadius=50,textContentType,onChangeText,onBlur,value,touched,errors,secureTextEntry=false,keyboardType='default',multiline=false,maxLength,onFocus,...others}) {

    const {width} = useAuth();
    const {theme}=useTheme();
return (
    <>
    <View style={[styles.container,{backgroundColor:theme.secondary,padding:padding,borderRadius:borderRadius,marginHorizontal:'1%',flex:1,...others}]}>
    <TextInput          
                placeholder={placeholder}
                textContentType={textContentType}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                style={[styles.textInputBox,{fontSize:width*0.04,color:theme.white}]}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                multiline={multiline}
                maxLength={maxLength}
                placeholderTextColor={theme.white}
                onFocus={onFocus}
                />
    </View>
        {/* <View style={[styles.container,{padding:padding,borderRadius:borderRadius,backgroundColor:theme.white=='#fff'?theme.primary:theme.white,...others}]}>
            <TextInput          
                placeholder={placeholder}
                textContentType={textContentType}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                style={[styles.textInputBox,{fontSize:width*0.04,color:theme.dark}]}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                multiline={multiline}
                maxLength={maxLength}
                placeholderTextColor={theme.white}
                onFocus={onFocus}
                />
        </View>
        <Text style={{color:'red',marginHorizontal:'5%'}}>{touched && errors}</Text> 
        */}
    </>
);
}

export default AppTextInput;
const styles = StyleSheet.create({
container:{
    
    width:'100%', 
    flexDirection:'row',
    alignItems:'center'
},
    textInputBox:{
        flex:1,
        // width:200,
    // paddingHorizontal:10,
    // backgroundColor:'blue',
    // marginRight:20
    marginHorizontal:10
}
});