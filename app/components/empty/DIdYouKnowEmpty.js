import React from 'react';
import { View, StyleSheet} from 'react-native';
import colors from '../../config/colors';
import useAuth from '../../auth/useAuth';

function DIdYouKnowEmpty(props) {
  const {width,height} = useAuth();

return (

        <View style={{backgroundColor:colors.primaryMedium,width:width*0.9,borderRadius:width*0.03,padding:width*0.04,height:height*0.1,alignSelf:'center',overflow:'hidden'}}>
          <View style={{flexDirection:'row',backgroundColor:colors.secondaryLight,padding:4,borderRadius:5,flex:1}}>
          
          </View>
        </View>
);
}

export default DIdYouKnowEmpty;
const styles = StyleSheet.create({

});