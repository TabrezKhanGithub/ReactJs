import { useState, useEffect } from 'react';
import './App.css';
import {v4 as uuidv4} from "uuid"
import TodoForm from './components/TodoForm';
import TodoLists from './components/TodoLists';

// get data from local storage
const getLsTodos = () => {
  let list = localStorage.getItem('todolist');
  console.log(list);

  if(list){
    return JSON.parse(localStorage.getItem('todolist'));
  }else {
    return [];
  }
}


  function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(getLsTodos());
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
          setTodos([{id: uuidv4(),todo}, ...todos])
          setTodo("");
        }
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
 
      // Add data to local storage
    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(todos))
      }, [todos])
  
  return (
    <div className="App">
      <div className='container'>
         <h1 className='title'>My Todo List</h1>
         <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId}/>
         <TodoLists handleDelete={handleDelete} handleEdit={handleEdit} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
