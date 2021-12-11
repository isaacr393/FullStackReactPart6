import { createStore, combineReducers } from 'redux'
import reducerAnecdote  from './reducers/anecdoteReducer'
import reducerMessage from './reducers/messageReducer'

const reducer = combineReducers({
    anecdotes: reducerAnecdote,
    message: reducerMessage
})

const store = createStore(reducer)

export default store

