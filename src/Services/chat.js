import axios from 'axios';

export const chatService = {

    getOldMessage: (id) => {
        return axios.get(`${process.env.PUBLIC_URL}/api/getOldMessage/${id}`)
        .catch(err => console.log(err));
    }
    
}