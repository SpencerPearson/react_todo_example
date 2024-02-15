import React from 'react'
import { Formik, Field, Form } from 'formik'
import { catSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function CatForm({ category = '', setShowCreate, getCategories, setShowEdit }) {
    const { categoryId, catName, catDesc } = category || ''

    const handleSubmit = (values) => {
        console.log(values)
        if (!category) {
            const catToCreate = values

            axios.post(`http://todoapi.spencerwpearson.com/api/Categories`, catToCreate).then(() => {
                setShowCreate(false)
                getCategories()
            })
        }
        else{
            const catToEdit = {
                categoryId: categoryId,
                catName: values.catName,
                catDesc: values.catDesc
            }

            axios.put(`http://todoapi.spencerwpearson.com/api/Categories/${categoryId}`, catToEdit).then(() => {
                setShowEdit(false)
                getCategories()
            })
        }
    }

  return (
    <div className='createCategory m-2 text-white text-center'>
        <Formik
            initialValues={{
                catName: category ? catName : '',
                catDesc: category ? catDesc : ''
            }}
            validationSchema={catSchema}
            onSubmit={(values) => handleSubmit(values)}>
            {(errors, touched) => (
                <Form id='catForm' className='row text-center m-auto'>
                    <div className="form-group m-1 p-1">
                        <Field name='catName' className='form-control' placeholder='Category Name' />
                        {errors.catName && touched.catName ? <div className="text-danger">{errors.catName}</div> : null }
                    </div>
                    <div className="form-group p-1 m-1">
                        <Field name='catDesc' as='textarea' className='form-control' placeholder='Description' />
                        {errors.catDesc && touched.catDesc ? (
                            <div className="text-danger">{errors.catDesc}</div>
                        ) : null }
                    </div>
                    <div className="form-group m-1">
                        <button className="btn btn-success" type='submit'>
                            SEND IT, CHARLIE!
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
  )
}
