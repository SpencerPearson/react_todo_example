import React from 'react'

export default function SingleToDo(props) {

  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{!props.category.catDescription ? 'No description provided' : props.category.catDescription}</td>
    </tr>
  )
}
