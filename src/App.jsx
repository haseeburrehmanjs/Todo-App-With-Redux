import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './redux/todoslice'



const App = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.todos)
    let inputRef = useRef()

    const addTodoinRedux = (event) => {
        event.preventDefault()
        console.log("todo added", inputRef.current.value)
        dispatch(addTodo({
            title: inputRef.current.title
        }))
        console.log(addTodo());
        
        inputRef.current.value = ''
        }

    return (
            <div>
                Todo App
                <form onSubmit={addTodoinRedux}>
                    <input type="text" placeholder='enter value' ref={inputRef} />
                    <button>add Todo</button>
                </form>
                
            </div>
        )
    }

    export default App
