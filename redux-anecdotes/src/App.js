import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from './reducers/anecdoteReducer'
import FormAnecdote from './FormAnecdote'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
     dispatch( voteAction(id) )
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}      
      <FormAnecdote />
    </div>
  )
}

export default App