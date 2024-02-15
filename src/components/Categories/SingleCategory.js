import React, { useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'
import CatEdit from './CatEdit'

export default function SingleToDo({ category, getCategories }) {
  const { categoryId, catName, catDesc} = category

  const [showEdit, setShowEdit] = useState(false)

  const { currentUser } = useAuth()

  const deleteCat = (id) => {
    if(window.confirm(`Are you sure you want to delete ${catName}?`)) {
      axios.delete(`http://todoapi.spencerwpearson.com/api/Categories/${id}`).then(() => getCategories())
    }
  }

  return (
    <tr>
        <td>{catName}</td>
        <td>{!catDesc ? 'No description provided' : catDesc}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
          <td>
            <button className="fs-5 rounded" id='editLink' onClick={() => setShowEdit(true)}>
              <FaEdit />
            </button>
            &emsp;
            <button className="fs-5 rounded" id='deleteLink' onClick={() => deleteCat(categoryId)}>
              <FaTrashAlt />
            </button>
            {showEdit &&
              <CatEdit
                category={category}
                getCategories={getCategories}
                showEdit={showEdit}
                setShowEdit={setShowEdit} />
            }
          </td>
        }
    </tr>
  )
}
