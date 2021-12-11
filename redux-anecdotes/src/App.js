import React from 'react'
import FormAnecdote from './FormAnecdote'
import AnecdoteList from './AnecdoteList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <Notification />
      <AnecdoteList />
      <FormAnecdote />
    </div>
  )
}

export default App