import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';


const TodoItems = ({ text, isCompleted, id, toggleCompletion, deleteTodo, editTodo }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      {/* Todo items will be rendered here */}
      <div className='flex items-center flex-1' onClick={() => toggleCompletion(id)}>
        <img src={isCompleted ? tick : not_tick} alt="tick icon" className='w-6 h-6' />
        <p className={`text-gray-500 mx-2 decoration-slate-500 ${isCompleted ? 'line-through' : ''}`}>{text}</p>
      </div>
      <img onClick={() => deleteTodo(id)} src={delete_icon} alt="delete icon" className='w-6 h-6 m-4' />
      <button className='bg-blue-500 text-white px-2 py-1 rounded' onClick={() => editTodo(id)}> Edit </button>

    </div>

  );
}

export default TodoItems;
