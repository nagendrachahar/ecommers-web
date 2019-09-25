import {checkSession} from '../../Services/customer';

export function checkLogin() {
    
    return (dispatch) => {
        return checkSession()
        .then(res => {
            
            if(res.data.resType === 'success'){
                dispatch({
                    type: 'UPDATE_LOGIN_STATUS',
                    payload: {userName: res.data.userName, isLogin: true}
                }) 
            }
            else {
                localStorage.removeItem("x-token");

                dispatch({
                    type: 'UPDATE_LOGIN_STATUS',
                    payload: {userName: "", isLogin: false}
                }) 
            }

        }).catch(err => console.log(err));
    }
    
}

