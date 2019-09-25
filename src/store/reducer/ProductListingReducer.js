const INITIAL_STATE = {
    productList:[]
}

export default (states = INITIAL_STATE, action) => {
   
  switch (action.type) {

    case 'UPDATE_PRODUCT_LIST':
        return ({
            ...states,
            productList: action.payload
        });

    default:
        return states;

  }
}
