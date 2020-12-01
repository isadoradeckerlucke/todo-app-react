import React from "react";

function Todo({id, handleRemove, todoText}){
    
    const remove = () => {
        handleRemove(id)
    }

    return(<div>
        <li>{todoText}</li>
        <button onClick = {remove}>remove todo</button>
    </div>)
}

export default Todo;