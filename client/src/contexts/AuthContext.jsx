import { createContext } from 'react'

const AuthContext = createContext({})

async function Login() {
    console.log(`Logged in!`)
}

export function AuthProvider({children}) {

    return <AuthContext.Provider value = {{ signedIn: false, user: {id: 0, username: null}, Login}}>
        { children }

    </AuthContext.Provider>
}

export default AuthContext