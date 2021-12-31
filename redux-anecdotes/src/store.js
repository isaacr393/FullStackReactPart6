import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducerAnecdote  from './reducers/anecdoteReducer'
import reducerMessage from './reducers/messageReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    anecdotes: reducerAnecdote,
    message: reducerMessage,
    filter: filterReducer
})

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store

