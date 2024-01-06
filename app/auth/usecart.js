import * as SecureStore from 'expo-secure-store';

const key = "onedoncart";
const storeCart = async (authToken) => {
    try {
      console.log(authToken);  // Ensure that authToken is an array
      await SecureStore.setItemAsync(key, JSON.stringify(authToken));
    } catch (error) {
      console.log("Error storing the auth token", error);
    }
  }
  

const getCart = async () =>{
    try {
        const storedData = await SecureStore.getItemAsync(key);
    
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          console.log(parsedData);  // This should be your array
          return parsedData;
        }
    
        return [];
      } catch (error) {
        console.log("Error retrieving the cart", error);
        return [];
      }
}

const clearCart = async () => {
    try {
      await SecureStore.deleteItemAsync(key);
      console.log("Cart cleared successfully");
    } catch (error) {
      console.log("Error clearing the cart", error);
    }
  }
  

export default {getCart,storeCart,clearCart}