import apiClient from "./client";


const endPoint = 'shops/services';

const allServices =() => apiClient.get(endPoint);
const updateServices =(data,id,token) => apiClient.post(`${endPoint}/${id}/services`,data,{ headers: { 'Authorization': `Bearer ${token}` } });

export default {
    allServices
}