

const filterReducer = (state="", action) => {

    switch( action.type){
        case 'SET_FILTER':
            return action.data
        default: 
            return state
    }
}

export const setFilterAction = (text) => {
    return {
        type: 'SET_FILTER',
        data: text
    }
}

export default filterReducer