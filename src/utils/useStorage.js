import { useState, useEffect } from 'react';
import { setValue, getValue } from './helper';

export const useStorage = ( defaultValue ) => {
    let [todos, setTodo] = useState( defaultValue );

    useEffect(() => {
        setValue('todos', JSON.stringify(todos));
    }, [todos.length]);

    return [todos, setTodo];
}
