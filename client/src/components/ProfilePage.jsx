import React from 'react'
import ReactDOM from 'react-dom'

function ProfilePage(props) {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {props.username}!</p>
    </div>
  )
}
