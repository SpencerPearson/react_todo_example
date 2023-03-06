import React from 'react'

export default function SingleToDo(props) {

  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{!props.category.catDesc ? 'No description provided' : props.category.catDesc}</td>
    </tr>
  )
}
