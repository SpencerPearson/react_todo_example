import React from 'react'
import { Modal } from 'react-bootstrap'
import CatForm from './CatForm'

export default function CatEdit({ category, showEdit, setShowEdit, getCategories }) {
  const { catName } = category
  return (
    <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        size='lg'>
            <Modal.Header closeButton>
                <h2>Editing {catName}</h2>
            </Modal.Header>
            <Modal.Body>
                <CatForm
                    getCategories={getCategories}
                    setShowEdit={setShowEdit}
                    category={category} />
            </Modal.Body>

    </Modal>
  )
}
