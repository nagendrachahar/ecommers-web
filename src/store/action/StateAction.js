import axios from 'axios';

export function getStateDetail(id) {
  
    return dispatch => {

        axios.get(`${process.env.PUBLIC_URL}/api/getStateById/${id}`)
        .then(response =>

            getStateDetailRes(dispatch, response)

        ).catch(err => console.log(err));
    }
}

function getStateDetailRes(dispatch, response) {
    
    try {
       if(response.data.resType === 'success'){

            return dispatch({
                type: 'UPDATE_STATE_DETAIL',
                payload: response.data.state
            })
       }
       else{
            return dispatch({
                type: 'ERROR_CATCH',
                payload: response.data
            })
       }
    }
    catch (err) {
        return dispatch({
            type: 'ERROR_CATCH',
            payload: 'Error_CATCH'
        })
    }
}

export function getStateList() {
  
    return dispatch => {

        axios.get(`${process.env.PUBLIC_URL}/api/getState`)
        .then(response =>

            getStateListRes(dispatch, response)

        ).catch(err => console.log(err));
    }
}

function getStateListRes(dispatch, response) {
   
    try {
       if(response.data.resType === 'success'){

            return dispatch({
                type: 'UPDATE_STATE_LIST',
                payload: response.data.state
            })
       }
       else{
            return dispatch({
                type: 'ERROR_CATCH',
                payload: response.data.message
            })
       }
    }
    catch (err) {
        return dispatch({
            type: 'ERROR_CATCH',
            payload: 'Error_CATCH'
        })
    }
}

export function showHideForm(data) {
  
    return dispatch => {

        return dispatch({
            type: 'SHOW_HIDE_FORM',
            payload: data
        })
    }
}




