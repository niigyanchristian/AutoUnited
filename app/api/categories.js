import apiClient from "./client";


const endPoint = 'categories';

const getCategories =(data) => apiClient.get(endPoint);
const getSubCategory =(id) => apiClient.get(endPoint+`/${id}/subcategories`);

export default {
    getCategories,
    getSubCategory
}