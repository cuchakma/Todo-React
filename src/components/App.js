import React, { useRef } from "react";
import { getValue } from "../utils/helper";
import { useStorage } from "../utils/useStorage";
import Card from "./Card";
import Header from "./Header";
import Button from "./Button";
import Input from "./Input";
import List from "./List";



import '../main.css';

const App = () => {

    let [todos, setTodo] = useStorage( getValue('todos') );
    let input            = useRef(null);

    return (
        <Card className={'card-body'}>
            <Header>
                <Input placeholderText={"What Do You Need Today"} className={"todo-input"} callback={input}/>
                <Button text={"Add"} className={"add-button"} type={'text'} callback={() => {
                    setTodo((previousValue) => {
                        let inputValue = {
                            key:previousValue.length,
                            value:input.current.value
                        };
                        input.current.value = '';
                        return [...previousValue, inputValue]
                    })
                }}/>
            </Header>
            <Card className={'card-list'}>
                { todos.length > 0 && todos.map((object) => {
                    return <List index={object.key}> 
                                {
                                    object.value
                                }
                           </List>
                })}
            </Card>
        </Card>
    );
}

export default App;