import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import './Categories.css'
import { useAuth } from '../../contexts/AuthContext'
import CatCreate from './CatCreate'

export default function Categories() {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    axios.get(`https://localhost:7258/api/Categories`).then(response => {
      console.log(response)
      setCategories(response.data)
    })
  }

  const { currentUser } = useAuth()

  const [showCreate, setShowCreate] = useState(false)

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <section className="categories">
      <article className="bg-purple p-4 mb-4">
        <h1 className='text-center'>ReactJS ToDo Dashboard</h1>
      </article>

      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className="p-2 mb-3 text-center">
          {showCreate ? 
            <>
              <button onClick={() => setShowCreate(false)} className="btn btn-danger p-3 mb-3">Cancel</button>
              <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />
            </>
            : <button onClick={() => setShowCreate(true)} className="btn btn-success p-3">Create Category</button>            
          }
        </div>
      }

      <Container className='pt-4'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(x =>
              <SingleCategory key={x.categoryId} category={x} getCategories={getCategories}/>
            )}
          </tbody>
        </Table>
      </Container>

    </section>
  )
}
