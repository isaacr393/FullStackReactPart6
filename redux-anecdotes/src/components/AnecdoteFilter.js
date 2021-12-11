import React from "react";
import { setFilterAction } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";


const AnecdoteFilter = () => {
    const dispatch = useDispatch()

    const handleChange = ({target}) => {
        dispatch( setFilterAction(target.value) )
    }

    return(
        <div>
            <input type="text" placeholder="filter anecdotes" onChange={handleChange} />
        </div>
    )
}

export default AnecdoteFilter