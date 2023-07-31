import React from "react";


const Header = ( { children } ) => {
    return (
        <div className="todo-header">
            {children}
        </div>
    )
}

export default Header;