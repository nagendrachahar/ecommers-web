import {Product} from '../../Services/master.js'

export function getProductList(filer) {
    
    return (dispatch) => {
        return Product.getProduct(filer)
        .then(res => {
            
            if(res.data.resType === 'success'){
                dispatch({
                    type: 'UPDATE_PRODUCT_LIST',
                    payload: res.data.product
                }) 
            }

        }).catch(err => console.log(err));
    }
    
}

