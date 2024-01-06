import apiClient from "./client";

const endpoint='shops';


// const register = (userInfo) => apiClient.post(endpoint, userInfo);
const getMyShop = (id,token) => apiClient.get(`${endpoint}/${id}`,{},{ headers: { 'Authorization': `Bearer ${token}` } });

const addshop = (userInfo,token) => apiClient.post(endpoint,userInfo,{ headers: { 'Authorization': `Bearer ${token}` } });
export default{
    addshop,
    getMyShop
}