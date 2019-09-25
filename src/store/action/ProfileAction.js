import {checkSession} from '../../Services/customer';

export function checkLogin() {
    
    return (dispatch) => {
        return checkSession()
        .then(res => {
            
            if(res.data.resType === 'success'){
                dispatch({
                    type: 'UPDATE_LOGIN_STATUS',
                    payload: res.data.userName
                }) 
            }
            else {
                localStorage.removeItem("x-token");

                dispatch({
                    type: 'UPDATE_LOGIN_STATUS',
                    payload: ""
                }) 
            }

        }).catch(err => console.log(err));
    }
    
}

