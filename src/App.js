import { useState } from 'react';
import './App.css';
// import {v4 as uuidv4} from "uuid"

function App() {

const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);
const [editId, setEditId] = useState(0);

const handleSubmit = (e) => {
  e.preventDefault();

  if(editId) {
    const editTodo = todos.find((i) => i.id === editId);
    const updatedTodos = todos.map((t) => 
      t.id === editTodo.id ? (t = {id: t.id , todo}) : 
      {id: t.id ,todo: t.todo}
    );
    setTodos(updatedTodos);
    setEditId(0);
    setTodo("");
    return;

  }

  if(todo !== "") {
    setTodos([{id: `${todo}-${Date.now}`, todo}, ...todos])
    setTodo("");
  }
}

const onInputChange = (e) =>{
  setTodo(e.target.value);
}

const handleDelete = (id) => {
  const delTodo = todos.filter((to) => to.id !== id)
  setTodos([...delTodo])
}

const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
}

  return (
    <div className="App">
      <div className='container'>
         <h1 className='title'>My Todo List</h1>
         <form className='todo-form' onSubmit={handleSubmit}>
          <input type="text" 
          value={todo}
          placeholder='Enter a todo...' 
          className='input' onChange={onInputChange}/>
          <button className='btn' type='submit'>{editId ? "EDIT" : "ADD"}</button>
         </form>
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
      </div>
    </div>
  );
}

export default App;
