import {PermissionService} from '../../Services/master.js'

export function getPermissionList(id) {
  
    return dispatch => {

        PermissionService.getPermissionList(id)
        .then(response =>

            getPermissionListRes(dispatch, response)

        ).catch(err => console.log(err));
    }
}

function getPermissionListRes(dispatch, response) {
    
    try {
       if(response.data.resType === 'success'){

            return dispatch({
                type: 'UPDATE_PERMISSION_LIST',
                payload: response.data.List
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
