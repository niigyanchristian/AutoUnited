import apiClient from "./client";


const endPoint = 'users/login'

const login =(data) => apiClient.post(endPoint,data);

export default {
    login
}