import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from './assets/Redux/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

const App = () => {
    let inputRef = useRef()
    let dispatch = useDispatch()
    let selector = useSelector(state => state.todo.todo)
    console.log(selector);

    useEffect(() => {
        if (selector.length > 0) {
            localStorage.setItem('sendData', JSON.stringify(selector))
        }
    }, [selector])

    const addTodoInRedux = event => {
        event.preventDefault()
        console.log(inputRef.current.value);
        dispatch(addTodo({
            title: inputRef.current.value
        }))
        inputRef.current.value = ''
    }

    const deleteTodoFromRedux = (index)=> {
        dispatch(deleteTodo({
            index,
        }))
    }
    const updateTodoFromRedux = (index)=> {
        dispatch(updateTodo({
            index,
        }))
    }
    
    return (
        <div>
            Todo App
            <form onSubmit={addTodoInRedux}>
                <input type="text" placeholder='Enter Todo' ref={inputRef} />
                <button>Add Todo</button>
            </form>
            <div>{selector.length > 0 ? <div>{selector.map((item, index) => <ul key={item.id}>
                <li>{item.title}
                    <button onClick={() => deleteTodoFromRedux(index)}>delete</button>
                    <button onClick={()=> updateTodoFromRedux(index)}>adit</button>
                </li>
            </ul>)}</div> : <p>Loading..</p>}
            </div>
        </div>
    )
}

export default App
