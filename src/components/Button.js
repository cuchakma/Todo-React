import React from "react";

const Button = ({ text, type, className, callback }) => {
    return (
        <button type={type} className={className} onClick={callback}>
            {text}
        </button>
    )
}

export default Button;