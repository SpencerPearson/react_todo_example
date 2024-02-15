import React from 'react'
import CatForm from './CatForm'

export default function CatCreate({ getCategories, setShowCreate }) {
  return (
    <div className="createCategoryContainer m-2 text-center w-75 m-auto">
        <CatForm getCategories={getCategories} setShowCreate={setShowCreate} />
    </div>
  )
}
