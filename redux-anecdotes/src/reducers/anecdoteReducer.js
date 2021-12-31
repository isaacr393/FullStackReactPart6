
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
export const voteAction = ( id ) =>{
  return {
    type: 'VOTE',
    data: id
  }
}

export const createAction = ( anecdote ) => {
  return{
    type: 'CREATE',
    data: anecdote
  }
}

export const initialState = ( anecdotes ) => {
  return{
    type: 'INITIAL',
    data: anecdotes
  }
}

export default reducerAnecdote