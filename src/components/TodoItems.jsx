import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';


const TodoItems = ({ text, id , isCompleted , deleteTodo , toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        {/* Todo items will be rendered here */}
        <div onClick={() => toggle(id)} className='flex items-center cursor-pointer flex-1'>
            <img  src={isCompleted ? tick : not_tick} alt="tick icon" className='w-6 h-6'/>
            <p className={`text-gray-500 mx-2 decoration-slate-500 ${isCompleted ? 'line-through' : ''}`}>{text}</p>
        </div>

        <img onClick={() => deleteTodo(id)} src={delete_icon} alt="delete icon" className='w-6 h-6 cursor-pointer m-4' />

    </div>
  );
}

export default TodoItems;
