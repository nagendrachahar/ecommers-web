const INITIAL_STATE = {
    messageShow: false,
    messageType: 'success',
    Message:''
}

export default (states = INITIAL_STATE, action) => {
    
  switch (action.type) {

        case 'HIDE_MESSAGE':
        return({
            ...states,
            messageShow: false,
            messageType: 'success',
            Message:''
        });

        case 'SHOW_MESSAGE':
        return({
            ...states,
            messageShow: true,
            messageType: action.payload.messageType,
            Message:action.payload.Message
        });

        default:
          return states;

  }
}
