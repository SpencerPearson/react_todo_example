import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import './Categories.css'

export default function Categories() {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    axios.get(`https://localhost:7258/api/Categories`).then(response => {
      console.log(response)
      setCategories(response.data)
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <section className="categories">
      <article className="bg-info p-4 mb-4">
        <h1 className='text-center'>ReactJS ToDo Dashboard</h1>
      </article>
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
