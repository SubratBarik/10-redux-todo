import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const [warning, setWarning] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (!trimmedInput) {
            setWarning('Please enter a task!');
            return;
        } // Prevent submission if input is empty
        dispatch(addTodo(trimmedInput))
        setInput('');
        setWarning(''); // Clear warning after successful submission
    }

    return (
        <>
            <form onSubmit={addTodoHandler}>
                <input 
                type='text'
                placeholder='Add ToDo' 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                />
                <button>Add ToDo</button>
            </form>
            {warning && <div style={{color: 'red', marginTop: '8px'}}>{warning}</div>}
        </>
    )
}

export default AddTodo;
