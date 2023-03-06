import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { toDoSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function ToDoForm(props) {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        axios.get(`https://localhost:7258/api/Categories`).then(response => setCategories(response.data))
    }

    const handleSubmit = (values) => {
        console.log(values)
        if (!props.resource) {
            const newToDo = {
                name: values.name,
                done: false,
                categoryId: values.categoryId
            }

            axios.post(`https://localhost:7258/api/ToDos`, newToDo).then(() => {
                props.getToDos()
                props.setShowCreate(false)
            })
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

  return (
    <Formik
        initialValues={{
            name: props.todo ? props.todo.name : '',
            done: props.todo ? props.todo.done : false,
            categoryId: props.todo ? props.todo.categoryId : ''
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
