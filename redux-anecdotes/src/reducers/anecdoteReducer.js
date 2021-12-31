import anecdoteService from '../services/anecdoteService'

const reducerAnecdote = (state = [], action) => {
  /* console.log('state now: ', state)
  console.log('action', action) */

  switch ( action.type ){
    case 'VOTE':
      let newState = state.map(anecdote => anecdote.id === action.data? {...anecdote, votes: anecdote.votes + 1}:anecdote)
      return newState.sort( (prev, current ) => current.votes - prev.votes )

    case 'CREATE':
      return state.concat( action.data )
    
    case 'INITIAL':
      return action.data.sort( (prev, current ) => current.votes - prev.votes )
    default:
      return state

  }  
}

// ACTIONS
export const voteAction = ( anecdote ) =>{
  return async dispatch => {
    let updatedAnecdote = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote.id
    })
  }
  return 
}

export const createAction = (content) => {
  return async dispatch => {
    let newNote = await anecdoteService.create(content)
    //  console.log('New note',newNote)
    dispatch({
      type: 'CREATE',
      data: newNote
    })
  }
}

export const initialState = () => {
  return async dispatch => {
    let notes = await anecdoteService.getAll()
    dispatch({
      type: 'INITIAL',
      data: notes
    })
  }  
}

export default reducerAnecdote