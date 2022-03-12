import { createContext } from 'react'
import useUserProfile from '../hooks/useUserProfile'

const AuthContext = createContext({})

async function Login() {
    console.log(`Logged in!`)
}

export function AuthProvider({children}) {

    // for now, instead of loggin in, just use user profile with ID 1
    // that is, assume user 1 is always logged in, so to speak
    const { id, username } = useUserProfile(1)

    console.log(`AuthProvider: ID ${id} | Username: "${username}"`)

    return <AuthContext.Provider value = {{ signedIn: true, user: {id: id, username: username}, Login}}>
        { children }

    </AuthContext.Provider>
}

export default AuthContext