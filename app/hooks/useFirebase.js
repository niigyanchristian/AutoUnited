import { useState } from "react";
import { ref, getDownloadURL,uploadBytes, deleteObject} from "firebase/storage";
import { storage } from "../../firebaseConfig";
import 'firebase/storage'; 

export default useFirebase = () => {

  const uploadImage = async (imageurl,path) => {
    // setActive(true)
    // setUploadVisible(true)
    const response = await fetch(imageurl)
    const blobFile = await response.blob()
    const reference = ref(storage, path+"/"+Date.now())
     const result = await uploadBytes(reference, blobFile)
     const image = await getDownloadURL(result.ref)
     // console.log("This is the url",image)
     return image;
 };
 const updateImage = async(newImageurl,oldImageurl,path) =>{
      // Create a reference to the file to delete
      const image=await uploadImage(newImageurl,path)
      const desertRef = ref(storage, oldImageurl);

      // Delete the file
      deleteObject(desertRef).then(async () => {
        // File deleted successfully
        // console.log("Image has been deleted successfuly !!!!");
      }).catch(async (error) => {
        // console.log("Error occured in image deletion !!!!",error)
      });
 return image;
 }

 const deleteImage = (oldImageurl) => {
  return new Promise((resolve, reject) => {
    // Create a reference to the file to delete
    const desertRef = ref(storage, oldImageurl);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        // console.log("Image has been deleted successfully!");
        resolve(true);
      })
      .catch((error) => {
        // console.log("Error occurred in image deletion:", error);
        resolve(false);
      });
  });
};


  return { uploadImage,updateImage,deleteImage };
};
