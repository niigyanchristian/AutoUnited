import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import useAuth from '../../auth/useAuth';
import AppText from '../../components/AppText';
import Constants from 'expo-constants';
// import { useTheme } from '../../hooks/ThemeContext';
import colors from '../../config/colors';

const TermsAndConditionsScreen = () => {
  const {width}=useAuth();
  // const {theme}=useTheme()
  return (
    <ScrollView style={[styles.container,{backgroundColor: colors.primary,}]}>
      <AppText  fontSize={width*0.065} marginBottom={0} fontFamily={"NunitoBold"}>AutoUnited Terms and Conditions</AppText>

<AppText fontFamily={"NunitoBold"} marginVertical="5%">Effective Date: 01/01/2024</AppText>

<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>1. Acceptance of Terms:</AppText>

<AppText lineHeight={width*0.06} letterSpacing={1.1}> 
 By downloading, installing, or using the AutoUnited mobile application ("the App"), you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our services.</AppText>


<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>2. Use of Services:</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
The App provides users access to vehicle parts sales, maintenance information, and related services.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
Users must provide accurate and complete information during registration.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>iii: </AppText>
Users are responsible for maintaining the confidentiality of their account information.
</AppText>
</View>


<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>3. Data Collection and Privacy:
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
AutoUnited may collect and use information as outlined in the Privacy Policy.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
Users consent to the collection, use, and sharing of their data for improving services.
</AppText>
</View>


<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>4. Vehicle Information:
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
Users may input data regarding their vehicles for personalised maintenance recommendations.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
AutoUnited will use this information solely to provide relevant services.
</AppText>
</View>


<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>5. Intellectual Property:
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
AutoUnited retains ownership of all intellectual property rights associated with the App.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
Users may not reproduce, distribute, or modify any part of the App without explicit permission.
</AppText>
</View>

<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>6. User Responsibilities: </AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
Users are responsible for their interactions within the App.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
Users must not engage in any illegal or unauthorised activities.
</AppText>
</View>

<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>7. Limitation of Liability: </AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
AutoUnited is not liable for any indirect, incidental, or consequential damages.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
AutoUnited is not responsible for the accuracy of information provided by third-party services.
</AppText>
</View>

<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>8. Termination: </AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
AutoUnited reserves the right to suspend or terminate services at its discretion.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
Users can terminate their accounts by following the provided instructions.
</AppText>
</View>

<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>9. Modifications: </AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
AutoUnited reserves the right to modify or revise these terms at any time.
</AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>ii: </AppText>
Users will be notified of significant changes via the App.
</AppText>
</View>

<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>10. Governing Law: </AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
These terms are governed by and construed in accordance with the laws of Ghana.
</AppText>
</View>

<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>11. Contact Information: </AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
For questions or concerns regarding these terms, please contact us at autounited@gmail.com.
</AppText>
</View>

<View style={{marginVertical:'5%'}}>
<AppText fontSize={width*0.05} fontFamily={"NunitoBold"}>12. Acknowledgement: </AppText>
<AppText lineHeight={width*0.06} letterSpacing={1.1}>
<AppText fontFamily={"NunitoBold"}>i: </AppText>
By using the AutoUnited App, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
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

export default TermsAndConditionsScreen;
