import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table } from 'react-bootstrap'
import SingleToDo from './SingleToDo'
import './ToDos.css'
import FilterCat from './FilterCat'

export default function ToDos() {
  const [toDos, setToDos] = useState([])


  const [filter, setFilter] = useState(0)
  const [showDone, setShowDone] = useState(false)

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
      <FilterCat setFilter={setFilter} showDone={showDone} setShowDone={setShowDone} />
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
            {!showDone ?
              <>
               {filter === 0 ? toDos.filter(x => x.done === false).map(x =>
                <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
                ) :
                toDos.filter(x => x.done === false && x.categoryId === filter).map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
            </> :
            <>
              {filter === 0 ? toDos.map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
                ) :
                toDos.filter(x => x.categoryId === filter).map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
            </>
            }
          </tbody>
        </Table>
        {!showDone ?
        <>
        {filter !== 0 && toDos.filter(x => x.done === false && x.categoryId === filter).length === 0 &&
          <h2 className="alert alert-warning text-dark">
            There are no incomplete To Do items in this category.
          </h2>
        }
        </> :
        <>
          {filter !== 0 && toDos.filter(x => x.categoryId === filter).length === 0 &&
          <h2 className="alert alert-warning text-dark">
            There are no To Do items in this category.
          </h2>
        }
        </>

        }
        </Container>
        
    </section>
  )
}
