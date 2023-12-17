import apiClient from "./client";


const endPoint = 'info/fuelpricings/'

const getFuelPrices =(data) => apiClient.get(endPoint+data);
// const getPart =(id) => apiClient.get(endPoint+id);

export default {
    getFuelPrices
}