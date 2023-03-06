import React, { useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'
import CatEdit from './CatEdit'

export default function SingleToDo(props) {
  const [showEdit, setShowEdit] = useState(false)

  const { currentUser } = useAuth()

  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{!props.category.catDesc ? 'No description provided' : props.category.catDesc}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
          <td>
            <button className="m-1 rounded" id='editLink' onClick={() => setShowEdit(true)}>
              <FaEdit />
            </button>
            {showEdit &&
              <CatEdit
                category={props.category}
                getCategories={props.getCategories}
                showEdit={showEdit}
                setShowEdit={setShowEdit} />
            }
          </td>
        }
    </tr>
  )
}
