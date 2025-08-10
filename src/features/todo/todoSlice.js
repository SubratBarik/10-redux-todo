import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), text: "Pizza in breakfast" }]
    //todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //state.todos = state.todos.filter((todo) => todo.id!==action.payload)
            // Only remove if more than one todo exists
            if (state.todos.length > 1) {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            }
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;