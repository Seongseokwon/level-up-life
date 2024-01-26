import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

export const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            console.log(action);
        },
        updateTodo: () => {},
        deleteTodo: () => {}
    }
})

export const {addTodo, updateTodo, deleteTodo} = todo.actions;
export default todo.reducer;