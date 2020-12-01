import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'

function NewTodoForm({createTodo}){
    // initial state is empty
    const [todoText, setTodoText] = useState("")

    const handleChange = evt => {
        setTodoText(evt.target.value)
    }

    const gatherInput = evt => {
        evt.preventDefault();
        createTodo({ todoText, id: uuid() });
        setTodoText("");
    }


    return (
        <div>
            <form onSubmit = {gatherInput}>
                <div>
                    <label htmlFor = 'todoText'>todo</label>
                    <input 
                        onChange = {handleChange}
                        type = 'text'
                        name = 'todoText'
                        value = {todoText.todoText}
                        id = 'todoText'
                    />
                </div>
                <button id = 'newTodoButton'>add a new todo</button>
            </form>
        </div>
    )
    
}

export default NewTodoForm;