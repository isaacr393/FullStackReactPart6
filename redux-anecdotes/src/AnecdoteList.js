import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from './reducers/anecdoteReducer'
import { newMessageAction, deleteMessageAction } from './reducers/messageReducer'
import AnecdoteFilter from './components/AnecdoteFilter'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {   
    //REDUX WITH HOOKS COMMENTED TO USE THE CONNECT FORM
    /*
    const anecdotes = useSelector( state => {
        if( state.filter === "" )
            return state.anecdotes
        
        return state.anecdotes.filter( anecdote => anecdote.content.includes(state.filter) )
    })
    
    const dispatch = useDispatch()
    */  
    const anecdotes = props.anecdotes

    const vote = (anecdote) => {
        //USING HOOKS
        /*
        dispatch( voteAction(anecdote) )
        dispatch( newMessageAction(`You voted ${anecdote.content}`, 3) )
        */

        props.voteAction(anecdote)
        props.newMessageAction(`You voted ${anecdote.content}`, 3)
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
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )} 
        </div>
    )

}

const mapStateToProps = ( state ) => {
    return {
        anecdotes: state.filter === ""?state.anecdotes
        :state.anecdotes.filter( anecdote => anecdote.content.includes(state.filter) ),
    }
}

const mapDispatchToProps  = {
    voteAction,
    newMessageAction
}

const ConnectedAnecdoteList = connect( mapStateToProps, mapDispatchToProps )(AnecdoteList)
export default ConnectedAnecdoteList

//WHEN USING HOOKS
//export default AnecdoteList