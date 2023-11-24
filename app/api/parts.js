import apiClient from "./client";


const endPoint = 'parts/'

const searchParts =(data) => apiClient.get(endPoint+data);
const getPart =(id) => apiClient.get(endPoint+id);

export default {
    searchParts,
    getPart
}