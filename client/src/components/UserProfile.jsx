import React, { useContext } from 'react'

import ProfileInfo from './ProfileInfo.jsx'
import UserPosts from './UserPosts.jsx'

import AuthContext from '../contexts/AuthContext.jsx'


function UserProfile({userId}) {

    const {signedIn, user} = useContext(AuthContext)

    console.log(`Sign-in status: ${JSON.stringify(signedIn, null, 2)} \nUser: ${JSON.stringify(user, null, 2)}`)

    const className = 'ProfileDisplay'

    return (
        <div className={className}>
            <ProfileInfo userId={userId}></ProfileInfo>
            <UserPosts userId={userId}></UserPosts>
        </div>
    )
}

export default UserProfile
