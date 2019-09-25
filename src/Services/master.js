import axios from 'axios';
import {baseUrl} from './Urls'

export const menuList = () => {
    return axios.get(`${baseUrl}/api/getAdminMenu`)
    .catch(err => console.log(err));
}

export const Product = {
    getProduct: (filer) => {
        return axios.post(`${baseUrl}/api/web/getProductList`, filer) 
        .catch(err => console.log(err));
    },

    getProductDetail: (id) => {
        return axios.get(`${baseUrl}/api/web/getProductDetail?pid=${id}`)
        .catch(err => console.log(err));
    },
}

export const Brand = {

    fetchList: () => {
        return axios.get(`${baseUrl}/api/web/getBrandList`) 
        .catch(err => console.log(err));
    }
    
}

export const Cart = {

    addToCart: (id) => { 
        return axios.post(`${baseUrl}/api/web/apiCart/addToCart?pid=${id}`) 
        .catch(err => console.log(err)); 
    },

    removeFromCart: (id) => { 
        return axios.post(`${baseUrl}/api/web/apiCart/removeFromCart?pid=${id}`) 
        .catch(err => console.log(err)); 
    },

    fetchList: () => {
        return axios.get(`${baseUrl}/api/web/apiCart/fetchCartList`) 
        .catch(err => console.log(err)); 
    }, 

    fetchLocalStoreList: (list) => {
        return axios.post(`${baseUrl}/api/web/apiCart/fetchLocalStoreList`, list) 
        .catch(err => console.log(err)); 
    }, 

    fetchCartTotal: () => { 
        return axios.get(`${baseUrl}/api/web/apiCart/fetchCartTotal`) 
        .catch(err => console.log(err)); 
    },

    fetchLocalStoreCartTotal: (list) => { 
        return axios.post(`${baseUrl}/api/web/apiCart/fetchLocalStoreCartTotal`, list) 
        .catch(err => console.log(err)); 
    }

    
}

export const categoryCall = {
    getCategoryById: (id) => {
        return axios.get(`${baseUrl}/api/getCategoryById/${id}`)
        .catch(err => console.log(err));
    },

    getCategoryList: () => {
        return axios.get(`${baseUrl}/api/getCategoryList`)
        .catch(err => console.log(err));
    },

    saveCategory: (data, isUpdate, id) => {
        let url = `${baseUrl}/api/SaveCategory`;

        if(isUpdate){
            url = `${baseUrl}/api/updateCategoryById/${id}`;
        }

        return axios.post(url, data)
        .catch(err => console.log(err));
    },

    deleteCategoryById: (id) => {
        return axios.delete(`${baseUrl}/api/deleteCategory/${id}`)
        .catch(err => console.log(err));
    },

    getCategoryDrop: (id) => {
        return axios.get(`${baseUrl}/api/getCategoryDrop/id=${id}`)
        .catch(err => console.log(err));
    }

}
