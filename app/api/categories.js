import apiClient from "./client";


const endPoint = 'categories';

const getCategories =(data) => apiClient.get(endPoint);
// const getPart =(id) => apiClient.get(endPoint+id);

export default {
    getCategories
}