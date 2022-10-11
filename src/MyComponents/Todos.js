import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  const titlestyle = {
    backgroundColor : "#555",
    color : "#fff",
    padding : "10px",
    borderRadius : "5px",
  }
  return (
    <div className="container">
      <h3 style={titlestyle} className='text-center my-5'>Todo-List</h3>
      {props.list.map((todo) => {
        return <TodoItem todo={todo} key={todo.SL} Delete={props.Delete}/>
      })}

    </div>
  )
}
