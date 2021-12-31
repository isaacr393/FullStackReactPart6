import React from 'react'
import FormAnecdote from './FormAnecdote'
import AnecdoteList from './AnecdoteList'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import anecdoteService from './services/anecdoteService'
import { initialState } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect( () =>{
    anecdoteService.getAll()
    .then( anecdotes => {
      //console.log(`Anecdotes`, anecdotes)
      dispatch(initialState(anecdotes))
    })
  }, [])

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <FormAnecdote />
    </div>
  )
}

export default App