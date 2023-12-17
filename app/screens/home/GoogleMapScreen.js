import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import useAuth from '../../auth/useAuth';
import AppText from '../../components/AppText';
import Rating from '../../components/Rating';
import Reviews from '../../components/Reviews';
import colors from '../../config/colors';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function GoogleMapScreen({ route }) {
  const { item } = route.params;
  const [markerCoordinate,setMarkerCoordinate]=useState({
    latitude: parseFloat(item.shop_long)??5.6356594,
    longitude: parseFloat(item.shop_lat)??-0.1874968,
  });
  const { width, height } = useAuth();

  console.log(item);

  return (
    <View style={styles.container}>
      <MapView
        style={{ width: width, height: height * 0.5 }}
        initialRegion={{
          latitude: markerCoordinate.latitude,
          longitude: markerCoordinate.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        // scrollEnabled={false}
      >
        {<Marker coordinate={markerCoordinate} title="Selected Location" />}
      </MapView>

      <ScrollView
        contentContainerStyle={{ width: width, padding: '3%', backgroundColor: colors.primaryMedium }}
      >
        <View style={{ flexDirection: 'row',flexWrap:'wrap', justifyContent: 'space-between' }}>
        {Object.entries(JSON.parse(item.service_pricings)??{key:'value'}).map(([key, value]) => (

              <AppText key={key} fontFamily="NunitoBold" fontSize={width * 0.043}>{`${key}: GH₵${value}`}</AppText>
            ))}
        </View>
        <Rating rating={3.5} />
        <Reviews />
      </ScrollView>
    </View>
  );
}

export default GoogleMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
