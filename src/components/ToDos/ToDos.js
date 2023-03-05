import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table } from 'react-bootstrap'
import SingleToDo from './SingleToDo'
import './ToDos.css'

export default function ToDos() {
  const [toDos, setToDos] = useState([])

  const getToDos = () => {
    axios.get(`https://localhost:7258/api/ToDos`).then(response => {
      console.log(response)
      setToDos(response.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, [])

  return (
    <section className="todos">
      <article className="bg-info p-4 mb-4">
        <h1 className='text-center'>ReactJS ToDo Dashboard</h1>
      </article>
      <Container className='pt-4'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Done?</th>
              <th>Task</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {toDos.map(x =>
              <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
            )}
          </tbody>
        </Table>
      </Container>

    </section>
  )
}
