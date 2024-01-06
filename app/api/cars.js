import apiClient from "./client";


// const getCars =(token) => apiClient.get('/vehicles/?make=Toyota&model=Corolla',{},{ headers: { 'Authorization': `Bearer ${token}` } });


const getMyCars =(token) => apiClient.get('/vehicles/owned/',{},{ headers: { 'Authorization': `Bearer ${token}` } });

const carMakes =(token) => apiClient.get('/vehicles/makes',{},{ headers: { 'Authorization': `Bearer ${token}` } });


const carModels =(make,token) => {
    console.log('====================================');
    console.log(`/vehicles/:${make}/models`);
    console.log('====================================');
    return apiClient.get(`/vehicles/:Toyota/models`,{},{ headers: { 'Authorization': `Bearer ${token}` } })
};


export default {
    getMyCars,
    carMakes,
    carModels
}