import React from 'react'
import ReactDOM from 'react-dom'

import useUserProfile from '../hooks/fetchUserProfile.js'

function ProfileDisplay({userId}) {
    const { username, bio, fetchStatus } = useUserProfile(userId)

    if(fetchStatus === "fetching") {
        return <h1>Loading user data...</h1>
    }

    else if (fetchStatus === "done") 
    {
            return (
                <div className="ProfilePage">
                    <h1>{username}</h1>
                </div>
            )
    }
    else if(fetchStatus === "not-found")
    {
        return <div className="ProfilePage">
                    <h1>No such user</h1>
                </div>
    }

}

export default ProfileDisplay
