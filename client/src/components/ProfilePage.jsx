import React from 'react'
import ReactDOM from 'react-dom'

import ProfileInfo from './ProfileInfo.jsx'
import UserPosts from './UserPosts.jsx'

function ProfileDisplay({userId}) {

    const className = 'ProfileDisplay'

    return (
        <div className={className}>
            <ProfileInfo userId={userId}></ProfileInfo>
            <UserPosts userId={userId}></UserPosts>
        </div>
    )
}

export default ProfileDisplay
