import axios from 'axios';
import {baseUrl} from './Urls';

export const login = (formData) => {

    return axios.post(`${baseUrl}/api/customerLogin`, formData)
    .catch(err => console.log(err));
  
}

export const Register = (data) => {
    return axios.post(`${baseUrl}/api/web/registerCustomer`, data)
    .catch(err => console.log(err));
}

export const checkSession = () => {
    return axios.get(`${baseUrl}/api/web/checkSession`)
    .catch(err => console.log(err));
}