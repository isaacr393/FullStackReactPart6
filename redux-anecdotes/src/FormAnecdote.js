import React from 'react'
import { useDispatch } from 'react-redux'
import { createAction } from './reducers/anecdoteReducer'

const FormAnecdote = () => {
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let content = e.target.anecdote.value
        e.target.anecdote.value = ""
        dispatch( createAction(content) )
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmit} >
                <div><input name="anecdote" /></div>
                <button type='submit' >create</button>
            </form>
        </div>
    )
}

export default FormAnecdote