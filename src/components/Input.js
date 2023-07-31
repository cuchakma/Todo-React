import React from "react";

const Input = ( { placeholderText, className, callback } ) => {
    return (
        <input placeholder={placeholderText} className={className} ref={callback}/>
    )
}

export default Input;