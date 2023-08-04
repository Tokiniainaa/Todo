"use client";
import React, { useState } from 'react';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, Todovalue] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const Change = (e) => {
    Todovalue(e.target.value);
  };

  const AddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      if (editingTodo) {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === editingTodo.id) {
            return { ...todo, text: inputValue };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditingTodo(null);
      } else {
        const newTodo = {
          id: Date.now(),
          text: inputValue,
        };
        setTodos([...todos, newTodo]);
      }
      Todovalue('');
    }
  };

  const DeleteToDo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const EditDoto = (todo) => {
    Todovalue(todo.text);
    setEditingTodo(todo);
  };

  return (

    <div className="todo-container w-90  body">
      <h1 className='text-center font-bold text-3xl mt-3 title'>LIST OF TODO</h1>
      <form onSubmit={AddTodo} className='text-center mt-5'>
<input type="text" value={inputValue} onChange={Change}   placeholder="Enter here your Todo ..." className="input input-bordered input-sm w-full max-w-xs mr-4" />
        <button type="submit" className='btn btn-outline btn-success boutton'>{editingTodo ? 'Update' : 'Add +'}  </button>
      </form>
      <ul>
        {todos.map((todo) => (

          <li key={todo.id}>
            <div className='border-solid border-2 border-rgb(91, 154, 242)-200 mt-4 text-center py-4 w-90  rounded-lg list'>
              <span>Todo Description:</span><p className='mb-7 bg-blue-880  font-bold text-base todo text-center texte capitalize'>{todo.text}</p>
              <div className="buttons-container">
                <button className="edit-button btn btn-outline btn-warning mr-4 boutton" onClick={() => EditDoto(todo)}>
                  Edit    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"  ><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                </button>
                <button className="btn delete-button btn-outline btn-error boutton" onClick={() => DeleteToDo(todo.id)}>
                  Delete -
                </button>
              </div>
            </div>
          </li>

        ))}
      </ul>
    </div>


  );
};

export default TodoList;