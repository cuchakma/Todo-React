import React from "react";

const Input = ( { placeholderText, className }, ref ) => {
    return (
        <input placeholder={placeholderText} className={className} ref={ref}/>
    )
}

export default React.forwardRef(Input);