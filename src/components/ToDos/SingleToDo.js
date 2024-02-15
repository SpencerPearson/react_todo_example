import React, { useState } from 'react'
import axios from 'axios'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import ToDoEdit from './ToDoEdit'

export default function SingleToDo({ todo, getToDos }) {
    const { toDoId, name, done, category, categoryId } = todo

    const [showEdit, setShowEdit] = useState(false)

    const { currentUser } = useAuth()

    const flipDone = () => {
        let updatedToDo = {
            toDoId: toDoId,
            name: name,
            done: !done,
            categoryId: categoryId
        }
        axios.put(`http://todoapi.spencerwpearson.com/api/ToDos/${toDoId}`, updatedToDo).then(response => {
            console.log(response)
            getToDos()
        })
    }

    const deleteToDo = (id) => {
        if(window.confirm(`Are you sure you want to delete ${name}?`)) {
            axios.delete(`http://todoapi.spencerwpearson.com/api/ToDos/${id}`).then(() => {getToDos()})
        }
    }

  return (
    <tr>
        <td>
            <input className='checkbox' type='checkbox' checked={done} onChange={() => flipDone()} />
        </td>
        <td>{name}</td>
        <td>{category.catName}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
            <td className='text-center'>
                <button className="fs-5 rounded" id='editLink' onClick={() => setShowEdit(true)}>
                    <FaEdit />
                </button>
                &emsp;
                <button className='fs-5 rounded' id='deleteLink' onClick={() => deleteToDo(toDoId)}>
                    <FaTrashAlt />
                </button>
                {showEdit &&
                    <ToDoEdit
                        todo={todo}
                        getToDos={getToDos}
                        showEdit={showEdit}
                        setShowEdit={setShowEdit} />
                }
            </td>
        }
    </tr>
  )
}
