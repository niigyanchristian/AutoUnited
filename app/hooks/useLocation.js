import * as Location from 'expo-location';

export default useLocation = () => {

  const getLocation = async () => {  
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      let location={latitude:currentLocation.coords.latitude,longitude:currentLocation.coords.longitude};
      
    return location;
 };


  return { getLocation };
};
