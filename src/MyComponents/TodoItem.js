import React from 'react'

export const TodoItem = ({todo, Delete}) => {
  const style = {
    paddingBottom : "20px",
    borderBottom : "1px solid #777",
  }
  const style2 = {
    fontSize : "25px",
    fontWeight : "700",
    color : "#333"
  }
  return (
    <div style={style} className='my-4'>
      <h5>{todo.SL}</h5>
      <h4 style={style2}>{todo.title}</h4>
      <p>{todo.Description}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>Delete(todo)}>Delete</button>
    </div>
  )
}

