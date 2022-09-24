import React from 'react'


const TodoForm = ({handleSubmit, todo, setTodo, editId}) => {
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" 
        value={todo}
        placeholder='Enter a todo...' 
        className='input' onChange={(e) => setTodo(e.target.value)}/>
        <button className='btn' type='submit'>{editId ? "EDIT" : "ADD"}</button>
    </form>
  )
}

export default TodoForm