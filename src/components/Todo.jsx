import React, { useRef, useState, useEffect } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems';


const Todo = () => {
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
  const inputRef = useRef(null);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = () => {



    if (!inputRef.current) return;

    const newTodo = {
      id: Date.now(),
      text: inputRef.current.value,
      isCompleted: false
    };

    if (newTodo.text.trim()) {
      setTodos([...todos, newTodo]);
      inputRef.current.value = '';
      console.log('Todo added:', newTodo);
    }
  };



  const toggleTodoCompletion = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));

  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    if (!inputRef.current) return;

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: inputRef.current.value };
      }
      return todo;
    });

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className='bg-gray-100 place-self-center w-11/12 max-w-m flex flex-col p-7 min-h-[500px] rounded-xl'>
      {/* title */}
      <div className="flex items-center mb-4 mt-2 gap-2">
        <img src={todo_icon} alt='Todo Icon' className='w-8 h-8' />
        <h2 className="text-3xl font-semibold">Your Todos</h2>
      </div>
      {/* input box */}
      <div className="mt-4 flex items-center bg-gray-200 my-7 rounded-full">
        <input ref={inputRef} type="text" placeholder="Add a new todo" className="flex-1 bg-transparent border-0 outline-none pr-2 pl-4 placeholder:text-gray-500" />
        <button onClick={addTodo} className="bg-orange-500 font-bold font-md text-white px-4 py-2 rounded-full cursor-pointer">Add +</button>
      </div>
      {/* Todo list */}
      <div className="mt-4">
        {/* Todo items will go here */}
        {todos.map((todo, index) => (
          <TodoItems key={index} text={todo.text} isCompleted={todo.isCompleted}
            id={todo.id} toggleCompletion={toggleTodoCompletion} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
      </div>
    </div>
  )
}

export default Todo
