import { createSlice, nanoid } from "@reduxjs/toolkit";

const getData = JSON.parse(localStorage.getItem('sendData')) || []

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todo: getData
    },
    reducers: {
        addTodo: ((state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        }),
        deleteTodo: ((state, action) => {
            state.todo.splice(action.payload.index, 1)
        }),
        updateTodo: ((state, action) => {
            let updateVal = prompt('enter new value')
            state.todo.splice(action.payload.index , 1 , {...state.todo , title: updateVal})
        })
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer