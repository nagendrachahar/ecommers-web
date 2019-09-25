import { combineReducers } from 'redux';
import StateReducer from './StateReducer';
import MessageReducer from './MessageReducer';
import ProductListingReducer from './ProductListingReducer';
import CartReducer from './CartReducer';
import ProfileReducer from './ProfileReducer'

export default combineReducers({
    stateReducer: StateReducer,
    messageReducer: MessageReducer,
    productListing: ProductListingReducer,
    cartReducer: CartReducer,
    profileReducer: ProfileReducer
});
