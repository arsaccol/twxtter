import { createContext } from 'react'

const AuthContext = createContext({signedIn: false, user: { id: 0, username: null}})

export function AuthProvider({children}) {

    return <AuthContext.Provider value = {{ signedIn: false, user: {id: 0, username: null}}}>
        { children }

    </AuthContext.Provider>
}

export default AuthContext