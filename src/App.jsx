import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from './assets/Redux/todoSlice'
import { Button, Typography } from '@mui/material'

const App = () => {
    let inputRef = useRef()
    let dispatch = useDispatch()
    let selector = useSelector(state => state.todo.todo)
    console.log(selector);

    // send data to local storage
    useEffect(() => {
        if (selector.length > 0) {
            localStorage.setItem('sendData', JSON.stringify(selector))
        }
    }, [selector])

    // get input value and push addtodo function
    const addTodoInRedux = event => {
        event.preventDefault()
        console.log(inputRef.current.value);
        if (inputRef.current.value === '') {
            alert('Please Enter Todo')
        } else {
            dispatch(addTodo({
                title: inputRef.current.value.toUpperCase()
            }))
        }
        inputRef.current.value = ''
    }

    // delete todo function
    const deleteTodoFromRedux = (index) => {
        dispatch(deleteTodo({
            index,
        }))
    }

    // update todo function
    const updateTodoFromRedux = (index) => {
        dispatch(updateTodo({
            index,
        }))
    }
    return (
        <>
            <div className='container mx-auto'>
                <Typography variant='h4' className='text-center'>React Todo App</Typography>
                <form onSubmit={addTodoInRedux} className='flex gap-3 mt-4 items-center justify-center'>
                    <input id='inputTodo' type="text" placeholder='Enter Todo' ref={inputRef} />
                    <Button type='submit' variant='contained'>Add</Button>
                </form>
                <div>
                    <ul>{selector.length > 0 ? <div>{selector.map((item, index) => (
                        <div>
                            <li className='p-4 bg-gray-100 mt-2' key={item.id}>{index + 1}. {item.title}
                            </li>
                            <div className='flex gap-3 mt-2'>
                                <Button variant='contained' color='error' onClick={() => deleteTodoFromRedux(index)}>Delete</Button>
                                <Button variant='contained' onClick={() => updateTodoFromRedux(index)}>Edit</Button>
                            </div>
                        </div>
                    ))}</div> : <Typography variant='h4' marginTop="20px" className='text-center text-red-500'>No Data Found..</Typography>}</ul>
                </div>
            </div>
        </>
    )
}

export default App
