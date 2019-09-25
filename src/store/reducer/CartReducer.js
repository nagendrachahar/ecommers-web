const INITIAL_STATE = {
    cartList:[],
    cartTotal:""
}

export default (states = INITIAL_STATE, action) => {
    
  switch (action.type) {

    case 'UPDATE_CART_LIST':
        return ({
            ...states,
            cartList: action.payload
        });

    case 'UPDATE_CART_TOTAL':
        return ({
            ...states,
            cartTotal: action.payload
        })

    default:
        return states;

  }
}
