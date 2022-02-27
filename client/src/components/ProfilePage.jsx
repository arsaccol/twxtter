import React from 'react'
import ReactDOM from 'react-dom'

import useUserProfile from '../hooks/fetchUserProfile.js'

function ProfileDisplay({userId}) {

    const className = 'ProfileDisplay'
    const { username, bio, fetchStatus } = useUserProfile(userId)

    const userDisplay = (
        <div>
            <h1>{username}</h1>
            <p>{bio}</p>
        </div>
    )

    const display = 
          fetchStatus === 'fetching'?
            <h1>Loading user data...</h1>
        : fetchStatus === 'done'?
            userDisplay
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
