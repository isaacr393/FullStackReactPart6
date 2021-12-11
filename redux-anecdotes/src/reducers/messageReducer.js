

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

export const newMessageAction = (msg) =>{
    return{
        type:'NEW_MESSAGE',
        data: msg
    }
}

export const deleteMessageAction = () =>{
    return{
        type:'DELETE_MESSAGE'
    }
}

export default reducerMessage