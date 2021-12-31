const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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

export const createAction = ( content ) => {
  return{
    type: 'CREATE',
    data: asObject(content)
  }
}

export const initialState = ( anecdotes ) => {
  return{
    type: 'INITIAL',
    data: anecdotes
  }
}

export default reducerAnecdote