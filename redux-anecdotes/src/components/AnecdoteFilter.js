import React from "react";
import { setFilterAction } from "../reducers/filterReducer";
import {connect } from "react-redux";

const AnecdoteFilter = (props) => {

    const handleChange = ({target}) => {
        props.setFilterAction(target.value)
    }

    return(
        <div>
            <input type="text" placeholder="filter anecdotes" onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps = {
    setFilterAction
}

const ConnectedAnecdoteFilter = connect(null, mapDispatchToProps)(AnecdoteFilter)
export default ConnectedAnecdoteFilter