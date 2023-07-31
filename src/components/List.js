import React from "react";


const List = ( { todos } ) => {
    return ( 
        todos.length > 0 && 
        <ul>
            {todos.map(({key, value}) => <li key={key}>{value}</li>)} 
        </ul>
    )
}

export default List;