import {Cart} from '../../Services/master.js'

export function getCartList() {
    
    return (dispatch) => {
        if(localStorage.getItem("x-token") != null){
            const list = localStorage.getItem("cart");
           
            if(list !== null){
                Cart.fillToCart(JSON.parse(list))
                .then(res => {
                    console.log(res.data)
                    
                    if(res.data.resType === 'success'){
                        localStorage.removeItem("cart");
                        return Cart.fetchList()
                        .then(res => {
                            console.log(res.data)
                            if(res.data.resType === 'success'){
                                dispatch({
                                    type: 'UPDATE_CART_LIST',
                                    payload: res.data.cart
                                }) 
                            }

                        }).catch(err => console.log(err));
                    }

                }).catch(err => console.log(err));
                
            }
            else{
                return Cart.fetchList()
                .then(res => {
                    console.log(res.data)
                    if(res.data.resType === 'success'){
                        dispatch({
                            type: 'UPDATE_CART_LIST',
                            payload: res.data.cart
                        }) 
                    }

                }).catch(err => console.log(err));
            }
            
        }
        else{
            const list = localStorage.getItem("cart");
           
            if(list !== null){
                return Cart.fetchLocalStoreList(JSON.parse(list))
                .then(res => {
                    console.log(res.data)
                    if(res.data.resType === 'success'){
                        dispatch({
                            type: 'UPDATE_CART_LIST',
                            payload: res.data.cart
                        }) 
                    }

                }).catch(err => console.log(err));
               
            }
        }
        
    }
    
}

export function getCartTotal() {
    
    return (dispatch) => {
        if(localStorage.getItem("x-token") != null){
            return Cart.fetchCartTotal()
            .then(res => {
                console.log(res.data)
                if(res.data.resType === 'success'){
                    dispatch({
                        type: 'UPDATE_CART_TOTAL',
                        payload: res.data.cartTotal
                    }) 
                }

            }).catch(err => console.log(err));
        }
        else{
            const list = localStorage.getItem("cart");
            if(list !== null){
                return Cart.fetchLocalStoreCartTotal(JSON.parse(list))
                .then(res => {
                    console.log(res.data)
                    if(res.data.resType === 'success'){
                        dispatch({
                            type: 'UPDATE_CART_TOTAL',
                            payload: res.data.cartTotal
                        }) 
                    }

                }).catch(err => console.log(err));
            }
        }
        
    }
    
}