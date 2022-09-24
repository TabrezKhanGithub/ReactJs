import React from 'react'

const TodoLists = ({todos, handleDelete, handleEdit}) => {

  return (
    <ul className='alltodos'>
          {
            todos.map((t) => (
              <li className='singletodo'>
                <span className='todo-text'key={t.id}>{t.todo}</span>
                <button className='btn'onClick={()=> handleEdit(t.id)}>Edit</button>
                <button className='btn' onClick={()=>handleDelete(t.id)}>Delete</button>
              </li>
            ))
          }
              
         </ul>
  )
}

export default TodoLists