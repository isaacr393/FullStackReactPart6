import React from 'react'
import { useDispatch } from 'react-redux'
import { createAction } from './reducers/anecdoteReducer'
import { newMessageAction } from './reducers/messageReducer'

const FormAnecdote = () => {
    const dispatch = useDispatch()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let content = e.target.anecdote.value
        e.target.anecdote.value = ""
        dispatch( createAction(content) )
        dispatch( newMessageAction(`You created the note: ${content}`, 5) )
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