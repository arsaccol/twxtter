import React from 'react'
import ReactDOM from 'react-dom'

import ProfileInfo from './ProfileInfo.jsx'

function ProfileDisplay({userId}) {

    const className = 'ProfileDisplay'

    return (
        <div className={className}>
            <ProfileInfo userId={userId}></ProfileInfo>
        </div>
    )
}

export default ProfileDisplay
