import axios from 'axios';
import {baseUrl} from './Urls'

export const Register = (data) => {
    return axios.post(`${baseUrl}/api/registerSeller`, data)
    .catch(err => console.log(err));
}

export const seller = {
    getSeller: () => {
        return axios.get(`${baseUrl}/api/web/getSeller`)
        .catch(err => console.log(err));
    }
}