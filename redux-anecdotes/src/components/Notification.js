import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const message = props.message.msg

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if( message )
    return (
      <div style={style}>
        {message}
      </div>
    )
  else 
    return null
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification