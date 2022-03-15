import ProfileInfo from './ProfileInfo.jsx'
import UserPosts from './UserPosts.jsx'


function UserProfile({userId, username}) {

    const className = 'UserProfile'

    return (
        <div className={className}>
            <ProfileInfo userId={userId} propUsername={username}></ProfileInfo>
            <UserPosts userId={userId} username={username}></UserPosts>
        </div>
    )
}

export default UserProfile
