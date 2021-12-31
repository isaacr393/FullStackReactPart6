

const reducerMessage = ( state = "", action ) => {

    switch( action.type ){
        case 'NEW_MESSAGE':
            return action.data
        case 'DELETE_MESSAGE':
            return ""
        default:
            return state
    }
}

export const newMessageAction = (msg, time) =>{
    return dispatch => {
        //console.log(msg,time)
        let timeToVanish  = time * 1000
        dispatch({
            type:'NEW_MESSAGE',
            data: msg
        })
        setTimeout( () => {            
            dispatch( deleteMessageAction() )
        },timeToVanish )
    }
}

export const deleteMessageAction = () =>{
    return{
        type:'DELETE_MESSAGE'
    }
}

export default reducerMessage