import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { toDoSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function ToDoForm({ todo = '', getToDos, setShowCreate, setShowEdit }) {
    const { toDoId, name, done, categoryId } = todo || ''
    

    const [categories, setCategories] = useState([])

    const getCategories = () => {
        axios.get(`http://todoapi.spencerwpearson.com/api/Categories`).then(response => setCategories(response.data))
    }

    const handleSubmit = (values) => {
        console.log(values)
        if (!todo) {
            const newToDo = {
                name: values.name,
                done: false,
                categoryId: values.categoryId
            }

            axios.post(`http://todoapi.spencerwpearson.com/api/ToDos`, newToDo).then(() => {
                getToDos()
                setShowCreate(false)
            })
        }
        else {
            const taskToEdit = {
                toDoId: toDoId,
                name: values.name,
                done: done,
                categoryId: values.categoryId
            }

            axios.put(`http://todoapi.spencerwpearson.com/api/ToDos/${toDoId}`, taskToEdit).then(() => {
                getToDos()
                setShowEdit(false)
            })
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

  return (
    <Formik
        initialValues={{
            name: todo ? name : '',
            done: todo ? done : false,
            categoryId: todo ? categoryId : ''
        }}
        validationSchema={toDoSchema}
        onSubmit={(values) => handleSubmit(values)}>
        {({errors, touched}) => (
            <Form id='toDoForm'>
                <div className="form-group m-3">
                    <Field name='name' className='form-control' placeholder='New Task' />
                    {errors.name && touched.name ? (
                        <div className="text-danger">{errors.linkText}</div>
                    ) : null}
                </div>
                <div className="form-group m-3">
                    <Field name='categoryId' as='select' className='form-control'>
                        <option value='' disabled>[--Choose a Category--]</option>
                        {categories.map(cat =>
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.catName}
                            </option>    
                        )}
                    </Field>
                </div>
                <div className="form-group m-3">
                    <button className="btn btn-success m-3" type='submit'>SEND IT, CHARLIE!</button>
                </div>
            </Form>
        )}
    </Formik>
  )
}
