import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppText from '../../components/AppText';
import useAuth from '../../auth/useAuth';
// import { useTheme } from '../../../hooks/ThemeContext';
import colors from '../../config/colors';

const PrivacyPolicyScreen = () => {
    const {width}=useAuth();
    // const {theme}=useTheme();
  return (
    <ScrollView style={[styles.container,{backgroundColor:colors.primary,}]}>
      <AppText fontSize={width*0.065} marginBottom={0} fontFamily={"NunitoBold"}>AutoUnited Privacy Policy</AppText>
      <AppText fontFamily={"NunitoBold"}>Effective Date: 01/01/2024</AppText>
      
      <View style={{marginTop:Constants.statusBarHeight}}>
      <AppText lineHeight={width*0.06} letterSpacing={1.1}>
      {`AutoUnited is committed to ensuring the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.\n`}
      <AppText fontFamily={"NunitoBold"}>Please read it carefully.</AppText>
      </AppText>
      </View>
      
      <View style={{marginBottom:'3%',marginTop:'10%'}}>
      <AppText fontSize={width*0.055} fontFamily={"NunitoBold"}>Information We Collect</AppText>
      </View>

 <View style={{marginVertical:'3%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>1. Personal Information</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
User registration details (name, email, etc.).
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
Vehicle information for maintenance purposes.
</AppText>
</View>     
 
 
 <View>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>2. Usage Data</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
Information about how you interact with our app.
</AppText>
</View>  


 <View style={{marginVertical:Constants.statusBarHeight}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>3. How We Use Your Information</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>Provide and Maintain Services: </AppText>
To offer and manage the services provided by AutoUnited.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>Personalization: </AppText>
To tailor the app experience based on user preferences.

</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>Communication: </AppText>
To communicate with users regarding updates, promotions, and important information
</AppText>
</View>     


 <View >
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>4. Information Sharing
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
AutoUnited does not sell, trade, or transfer your personal information to third parties. We may share non-personal information for analytical purposes.
</AppText>
</View> 

<View style={{marginVertical:Constants.statusBarHeight}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>5. Data Security
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
</AppText>
</View>

<View >
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>6. Your Choices</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
You have the right to access, correct, update, or delete your personal information. You can manage your preferences within the app settings.
</AppText>
</View>


<View style={{marginVertical:Constants.statusBarHeight}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>7. Changes to this Privacy Policy</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
We reserve the right to update this privacy policy. You will be notified of any significant changes through the app or via email.

</AppText>
</View>


<View >
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>8. Contact Us</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
If you have any questions or concerns regarding this Privacy Policy, please contact us at [autounited@gmail.com].
</AppText>
</View>
<View style={{height:Constants.statusBarHeight}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});

export default PrivacyPolicyScreen;
