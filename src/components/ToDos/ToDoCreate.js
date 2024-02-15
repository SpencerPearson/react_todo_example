import React from 'react'
import ToDoForm from './ToDoForm'

export default function ToDoCreate({ getToDos, setShowCreate }) {
  return (
    <article className="createToDo m-2 text-white justify-content-center">
        <ToDoForm getToDos={getToDos} setShowCreate={setShowCreate} />
    </article>
  )
}
