import { createStore, combineReducers } from 'redux'
import reducerAnecdote  from './reducers/anecdoteReducer'
import reducerMessage from './reducers/messageReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    anecdotes: reducerAnecdote,
    message: reducerMessage,
    filter: filterReducer
})

const store = createStore(reducer)

export default store

