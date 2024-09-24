import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: ((state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        })
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.actions