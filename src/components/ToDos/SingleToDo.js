import React from 'react'
import axios from 'axios'

export default function SingleToDo(props) {

    const flipDone = () => {
        let updatedToDo = {
            toDoId: props.todo.toDoId,
            name: props.todo.name,
            done: !props.todo.done,
            categoryId: props.todo.categoryId
        }
        axios.put(`https://localhost:7258/api/ToDos/${props.todo.toDoId}`, updatedToDo).then(response => {
            console.log(response)
            props.getToDos()
        })
    }

  return (
    <tr>
        <td><input type='checkbox' checked={props.todo.done} onClick={() => flipDone()} /></td>
        <td>{props.todo.name}</td>
        <td>{props.todo.category.catName}</td>
    </tr>
  )
}
