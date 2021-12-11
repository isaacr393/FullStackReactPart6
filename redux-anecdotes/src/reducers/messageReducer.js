

const reducerMessage = ( state = "", action ) => {

    switch( action.type ){
        case 'NEW_MESSAGE':
            return action.data
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

export default reducerMessage