import React from 'react';

export const Submit = ({isSubmit}) => {
    return (
        
        <input type="submit" disabled={isSubmit} value="Login" className="submit_btn" /> 
        
    )
}

export const AddCart = ({style, func}) => {
    return (
        
        <input onClick={func} type="button" style={style} value="Add to Cart" className="submit_btn" /> 
        
    )
}
