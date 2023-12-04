
import * as ImagePicker from 'expo-image-picker';

export default useImage = () => {

  const openImagePickerAsync = async () => {    
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      // aspect: [4, 3],
      quality: 1,
    });
    if (pickerResult.canceled === true) {
      return;
    }
    
      return pickerResult.assets[0].uri;
 };
 const openCameraPickerAsync = async() =>{
  let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      // aspect: [4, 3],
      quality: 1,
  });  
  if (pickerResult.canceled === true) {
    return;
  }
  
 return pickerResult.assets[0].uri;
 }

  return { openImagePickerAsync,openCameraPickerAsync };
};
