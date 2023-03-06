import React, { useState } from 'react'
import axios from 'axios'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import ToDoEdit from './ToDoEdit'

export default function SingleToDo(props) {
    const [showEdit, setShowEdit] = useState(false)

    const { currentUser } = useAuth()


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
        <td><input type='checkbox' checked={props.todo.done} onChange={() => flipDone()} /></td>
        <td>{props.todo.name}</td>
        <td>{props.todo.category.catName}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
            <td>
                <button className="m1 rounded" id='editLink' onClick={() => setShowEdit(true)}>
                    <FaEdit />
                </button>
                {showEdit &&
                    <ToDoEdit
                        todo={props.todo}
                        getToDos={props.getToDos}
                        showEdit={showEdit}
                        setShowEdit={setShowEdit} />
                }
            </td>
        }
    </tr>
  )
}
