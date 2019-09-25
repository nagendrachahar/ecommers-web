const INITIAL_STATE = {
    isLogin: false,
    userName: ""
}

export default (states = INITIAL_STATE, action) => {
    
  switch (action.type) {

    case 'UPDATE_LOGIN_STATUS':
        return ({
            ...states,
            userName: action.payload,
            isLogin: true
        });

    default:
        return states;

  }
}
