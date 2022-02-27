import React from 'react'
import ReactDOM from 'react-dom'

import useUserProfile from '../hooks/fetchUserProfile.js'

function ProfileDisplay({userId}) {

    const className = 'ProfileDisplay'
    const { username, bio, fetchStatus } = useUserProfile(userId)

    const display = 
          fetchStatus === 'fetching'?
            <h1>Loading user data...</h1>
        : fetchStatus === 'done'?
            <h1>{username}</h1>
        : fetchStatus === 'not-found'?
            <h1>User not found</h1>
        :   <h1>Error fetching user data</h1>

    return (
        <div className={className}>
            {display}
        </div>
    )
}

export default ProfileDisplay
