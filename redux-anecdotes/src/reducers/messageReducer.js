

const reducerMessage = ( state = "", action ) => {

    switch( action.type ){
        case 'NEW_MESSAGE':
            if( state.timeOut !== null )
                clearTimeout(state.timeOut)
            return action.data
        case 'DELETE_MESSAGE':
            return {
                msg:"",
                timeOut: null
            }
        default:
            return state
    }
}

export const newMessageAction = (msg, time) =>{
    return dispatch => {
        //console.log(msg,time)
        let timeToVanish  = time * 1000        

        let timeOut = setTimeout( () => {            
            dispatch( deleteMessageAction() )
        },timeToVanish )

        dispatch({
            type:'NEW_MESSAGE',
            data: {
                msg: msg,
                timeOut
            }
        })
    }
}

export const deleteMessageAction = () =>{
    return{
        type:'DELETE_MESSAGE'
    }
}

export default reducerMessage