import React , {useRef,useState,useEffect} from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
    // Reference for the input field
    // This will be used to get the value of the input when adding a new todo
    const inputRef = useRef();
    const addTodo = () => {
        // Logic to add a new todo
        const inputText = inputRef.current.value.trim();
        if (inputText) {
            const newTodo = {
                id : Date.now(),
                text: inputText,
                isCompleted: false
            };
            setTodoList((prev) => [...prev, newTodo]);
            inputRef.current.value = '';
        }
    };

    const deleteTodo = (id) => {
        setTodoList((prev) => prev.filter((item) => item.id !== id));
    };

    const toggle = (id) => {
        setTodoList((prev) => prev.map((item) => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item));
    }

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList])

  return (
    <div className = 'bg-gray-100 place-self-center w-11/12 max-w-m flex flex-col p-7 min-h-[500px] rounded-xl'>

        {/* title */}
        <div className="flex items-center mb-4 mt-2 gap-2">
            <img src={todo_icon} alt='Todo Icon' className='w-8 h-8'/>
            <h2 className="text-3xl font-semibold">Your Todos</h2>
        
        </div>
        {/* input box */}
        <div className="mt-4 flex items-center bg-gray-200 my-7 rounded-full">
            <input ref={inputRef} type="text" placeholder="Add a new todo" className=" flex-1 bg-transparent border-0 outline-none pr-2 pl-4 placeholder:text-gray-500"/>
            <button onClick={addTodo} className="bg-orange-500 font-bold font-md text-white px-4 py-2 rounded-full cursor-pointer">Add +</button>
        </div>

        {/* Todo list */}
        <div>
            {/* Render the list of todo items */}
            {todoList.map((item,index) => (
                 <TodoItems key={index} text={item.text} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteTodo} toggle={toggle} />
              ))}
        </div>

      </div>

  )
}

export default Todo
