const INITIAL_STATE = {
    isStateFormShow: false,
    stateloading:true,
    stateDetail:'',
    stateList:[]
}

export default (states = INITIAL_STATE, action) => {
    
  switch (action.type) {

        case 'UPDATE_STATE_DETAIL':
          return ({
              ...states,
              stateDetail: action.payload
          });

        case 'UPDATE_STATE_LIST':
            return ({
                ...states,
                stateList: action.payload,
                stateloading: false
            });

        case 'SHOW_HIDE_FORM':
            return({
                ...states,
                isStateFormShow:action.payload
            });

        default:
          return states;

  }
}
