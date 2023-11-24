import { useContext } from "react";
import jwtDecode from 'jwt-decode';
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser,width,shops,setShops,height,shopImage,setShopImage,orders,setOrders,serviceData,setServiceData,modal,setModal } = useContext(AuthContext);

  const logIn = (user_login) => {
    // const user = jwtDecode(authToken);
    setUser(user_login);
    authStorage.storeToken(user_login);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };
  

  return { user,width,height,setUser,logIn, logOut,shops,setShops,shopImage,setShopImage,orders,setOrders,serviceData,setServiceData,modal,setModal };
};
