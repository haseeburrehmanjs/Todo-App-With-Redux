import { createSlice, nanoid } from "@reduxjs/toolkit";

// get data from local storage!
const getData = JSON.parse(localStorage.getItem('sendData')) || []

// create todo slice 
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todo: getData
    },
    reducers: {
        // add todo function
        addTodo: ((state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        }),

        // todo delete function
        deleteTodo: ((state, action) => {
            state.todo.splice(action.payload.index, 1)
        }),

        // todo update function 
        updateTodo: ((state, action) => {
            let updateVal = prompt('enter new value')
            if (updateVal !== '') {
                state.todo[action.payload.index].title = updateVal
            } 
        })
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer