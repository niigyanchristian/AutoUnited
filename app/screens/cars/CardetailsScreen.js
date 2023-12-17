import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image,Text, Platform, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';


import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppPicker from '../../components/AppPicker';
import AppButton from '../../components/AppButton';


const data = [
    {id:1,title:'Year'},
    {id:2,title:'Month'},
    {id:3,title:'Week'},
    {id:4,title:'Day'},
]

function CardetailsScreen(props) {
    const {width,height}=useAuth();
    const [isChecked, setChecked] = useState(false);
    const [selectedItem1,onSelectedItem1]=useState(data[0]);
    const [selectedItem2,onSelectedItem2]=useState(data[0]);
    const [date, setDate] = useState(new Date(Date.now()));
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const getDate = () => {
        showDatepicker()
      };
return (
<View style={styles.container}>
    <AppHeader Component={<AppText fontFamily='NunitoExtraBold' fontSize={width*0.045}>Car Details</AppText>}/>
    <ScrollView style={{flex:1}} contentContainerStyle={{padding:'5%',width:'100%',backgroundColor:colors.secondaryLight,width:width}}>
        <View style={{alignItems:'center'}}>
            <Image source={require('../../assets/imgs/toyota.png')}/>
            <AppText fontFamily='NunitoExtraBold' fontSize={width*0.045}>GE-2024-24</AppText>
        </View>

        <View>
        <AppText numberOfLines={1} marginVertical={'1%'}>Make: Toyota</AppText>
        <AppText numberOfLines={1} marginVertical={'1%'}>Model: Corolla</AppText>
        <AppText numberOfLines={1} marginVertical={'1%'}>Transmission: Automatic</AppText>
        <AppText numberOfLines={1} marginVertical={'1%'}>Chassis: TV-23-IKOL3R</AppText>
        <AppText numberOfLines={1} marginVertical={'1%'}>Drive train: Salon</AppText>
        <AppText numberOfLines={1} marginVertical={'1%'}>Body Type: Sedan</AppText>
        <AppText numberOfLines={1} marginVertical={'1%'}>Fuel Type: Petrol / Super</AppText>
        <AppText numberOfLines={1} marginVertical={'1%'}>Model Year: 2023</AppText>
        </View>
        <View>
        <AppText fontFamily='NunitoExtraBold' fontSize={width*0.045} textAlign='center' marginTop="10%">Reminders</AppText>
      <View style={styles.section}>
        <Text style={styles.paragraph}>Body works</Text>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
      </View>
      
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:'1%'}}>
        <View><AppText>Every</AppText></View>
        <View style={{width:width*0.3,height:width*0.1,backgroundColor:colors.primary,borderRadius:width*0.1,justifyContent:'center',alignItems:'center'}}><AppText>1</AppText></View>
        <View>
        <AppPicker items={data} selectedItem={selectedItem1}  onSelectedItem={onSelectedItem1} width={width*0.3} borderRadius={width*0.1} paddingLeft='5%'/>
        </View>
      </View>

      {/* Starting */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:'1%'}}>
        <View><AppText>Starting</AppText></View>
        <Pressable onPress={getDate} style={{width:width*0.5,height:width*0.1,backgroundColor:colors.primary,borderRadius:width*0.1,justifyContent:'center',alignItems:'center'}}><AppText>{date.toString().substring(0,15)}</AppText></Pressable>
      </View>
      {show && (
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            />
        )}

        <View style={styles.section}>
            <Text style={styles.paragraph}>Insurance</Text>
            <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
            />
        </View>
        <View style={styles.section}>
            <Text style={styles.paragraph}>Check Oil & Coolant</Text>
            <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
            />
        </View>
      
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:'1%'}}>
        <View><AppText>Every</AppText></View>
        <View style={{width:width*0.3,height:width*0.1,backgroundColor:colors.primary,borderRadius:width*0.1,justifyContent:'center',alignItems:'center'}}><AppText>1</AppText></View>
        <View>
        <AppPicker items={data} selectedItem={selectedItem2}  onSelectedItem={onSelectedItem2} width={width*0.3} borderRadius={width*0.1} paddingLeft='5%'/>
        </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:'1%'}}>
        <View><AppText>Starting</AppText></View>
        <Pressable onPress={getDate} style={{width:width*0.5,height:width*0.1,backgroundColor:colors.primary,borderRadius:width*0.1,justifyContent:'center',alignItems:'center'}}><AppText>{date.toString().substring(0,15)}</AppText></Pressable>
      </View>
      {show && (
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            />
        )}

        </View>
        <AppButton text={"Save"} marginTop="10%"/>


    </ScrollView>
</View>
);
}

export default CardetailsScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primaryMedium
},section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});