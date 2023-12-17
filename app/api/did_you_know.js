import apiClient from "./client";


const endPoint = 'info/dyk'

const didYouKnow =() => apiClient.get(endPoint);
// const getPart =(id) => apiClient.get(endPoint+id);

export default {
    didYouKnow
}