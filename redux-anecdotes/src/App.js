import React from 'react'
import FormAnecdote from './FormAnecdote'
import AnecdoteList from './AnecdoteList'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initialState } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect( () =>{
    dispatch(initialState())
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