import React from 'react';
//import { Link } from 'react-router-dom'

export const ReactMessage = ({messageType, Message, func}) => {
    if(messageType === 'success')
    return (
        <div className="alert alert-success" style={{position:'fixed', bottom:'20px', right: '20px', zIndex:'9'}}>
            <button type="button" className="close" onClick={func} >&times;</button>
            <strong>Success!</strong> {Message} 
        </div>
    )
    else return (
        <div className="alert alert-danger" style={{position:'fixed', bottom:'20px', right: '20px', zIndex:'9'}}>
            <button type="button" className="close" onClick={func} >&times;</button>
            <strong>Error!</strong> {Message} 
        </div>
    )
}
