import React from 'react'

import ProfileInfo from './ProfileInfo.jsx'
import UserPosts from './UserPosts.jsx'

function UserProfile({userId}) {

    const className = 'ProfileDisplay'

    return (
        <div className={className}>
            <ProfileInfo userId={userId}></ProfileInfo>
            <UserPosts userId={userId}></UserPosts>
        </div>
    )
}

export default UserProfile
