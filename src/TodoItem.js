import React from "react"

function TodoItem(props) {
    return (
        props.item.completed === true ?
            <div className="todo-item">
                    <input 
                        type="checkbox" 
                        checked={props.item.completed} 
                        onChange={() => props.handleChange(props.item.id)}
                    />
                    <p style={{textDecoration: "line-through"}}>{props.item.text}</p>
            </div>
        :
            <div className="todo-item">
                    <input 
                        type="checkbox" 
                        checked={props.item.completed} 
                        onChange={() => props.handleChange(props.item.id)}
                    />
                    <p>{props.item.text}</p>
            </div>
    )
}

export default TodoItem