import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from './reducers/anecdoteReducer'
import { newMessageAction, deleteMessageAction } from './reducers/messageReducer'
import AnecdoteFilter from './components/AnecdoteFilter'

const AnecdoteList = () => {   
    const anecdotes = useSelector( state => {
        if( state.filter === "" )
            return state.anecdotes
        
        return state.anecdotes.filter( anecdote => anecdote.content.includes(state.filter) )
    })
    
    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch( voteAction(id) )
        dispatch( newMessageAction(`You voted ${content}`) )
        setTimeout( () => {
            dispatch( deleteMessageAction() )
        },3000 )
    }
    
    return(
        <div>
            <AnecdoteFilter />

            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                </div>
                </div>
            )} 
        </div>
    )

}

export default AnecdoteList