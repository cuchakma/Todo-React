import React from "react";


const List = ( { children, index } ) => {
    return (
        <li key={index}>
            {children}
        </li>
    );
}

export default List;