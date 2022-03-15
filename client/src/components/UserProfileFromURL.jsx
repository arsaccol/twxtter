import { useParams } from 'react-router-dom'
import UserProfile from './UserProfile'

// this is a big hack, I messed up the design of user profiles lol
function UserProfileFromURL() {
    const { username } = useParams()
    console.log(`Username obtained from URL: "${username}"`)

    return <UserProfile username={username}></UserProfile>
}

export default UserProfileFromURL