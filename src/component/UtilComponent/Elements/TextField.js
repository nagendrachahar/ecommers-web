import React from 'react';

export const TextField = ({Type, Name, Value, Placeholder, Func, style}) => {
    return (
        
        <input type={Type} style={style} name={Name} value={Value} className="textfield" placeholder={Placeholder} onChange={Func} />
        
    )
}
