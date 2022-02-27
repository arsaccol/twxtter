import React from 'react'
import ReactDOM from 'react-dom'

import useUserProfile from '../hooks/fetchUserProfile.js'

function ProfilePage({userId}) {
    const { username, bio, fetchStatus } = useUserProfile(userId)

    if(fetchStatus === "fetching") {
        return <h1>Loading user data...</h1>
    }

    else if (fetchStatus === "done") 
    {
            return (
                <div className="ProfilePage">
                    <h1>Profile Page</h1>
                    <p>Welcome, {username}!</p>
                    <p>User data fetch status: {fetchStatus}</p>
                </div>
            )
    }
}

export default ProfilePage
