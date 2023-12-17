import apiClient from "./client";


const endPoint = 'info/nearest'

const nearMe =(data) => apiClient.get(endPoint+data);
// const getPart =(id) => apiClient.get(endPoint+id);

export default {
    nearMe
}