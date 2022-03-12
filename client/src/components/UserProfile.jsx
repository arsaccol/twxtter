import ProfileInfo from './ProfileInfo.jsx'
import UserPosts from './UserPosts.jsx'


function UserProfile({userId, username}) {

    const className = 'UserProfile'

    return (
        <div className={className}>
            <ProfileInfo userId={userId}></ProfileInfo>
            <UserPosts userId={userId}></UserPosts>
        </div>
    )
}

export default UserProfile
