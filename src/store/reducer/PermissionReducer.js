const INITIAL_STATE = {
    permissionListLoading: true,
    permissionList:[]
}

export default (states = INITIAL_STATE, action) => {
    
  switch (action.type) {

        case 'UPDATE_PERMISSION_LIST':
            return ({
                ...states,
                permissionList: action.payload,
                permissionListLoading:false
            });

        default:
          return states;

  }
}
