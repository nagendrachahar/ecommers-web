

export function hideMessage() {
  
    return dispatch => {

        return dispatch({
            type: 'HIDE_MESSAGE',
            payload: ''
        })
    }
}

export function showMessage(data) {
  
    return dispatch => {

        return dispatch({
            type: 'SHOW_MESSAGE',
            payload: data
        })
    }
}
