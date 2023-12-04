import apiClient from "./client";

const endpoint='users/signup';
const endpointUpdate='users/';


const register = (userInfo) => apiClient.post(endpoint, userInfo);
// const changeCredentials = (userInfo) => apiClient.post(cendpoint, userInfo);

const updateUserProfile = (userInfo,id,token) => apiClient.post(endpointUpdate+id,userInfo,{ headers: { 'Authorization': `Bearer ${token}` } });
export default{
    register,
    // changeCredentials,
    updateUserProfile
}