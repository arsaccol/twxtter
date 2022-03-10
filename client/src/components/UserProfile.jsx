import ProfileInfo from './ProfileInfo.jsx'
import UserPosts from './UserPosts.jsx'

import useAuth from '../hooks/useAuth'


function UserProfile({userId}) {

    const {signedIn, user} = useAuth()

    console.log(`Sign-in status: ${JSON.stringify(signedIn, null, 2)} \nUser: ${JSON.stringify(user, null, 2)}`)

    const className = 'UserProfile'

    return (
        <div className={className}>
            <ProfileInfo userId={userId}></ProfileInfo>
            <UserPosts userId={userId}></UserPosts>
        </div>
    )
}

export default UserProfile
