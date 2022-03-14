import { useEffect, useState } from 'react'
import axios from 'axios'


function useUserProfile({ id, username }) {
    const [userProfile, setUserProfile] = useState({fetchStatus: "fetching"})

    useEffect(() => {
        async function fetchUserProfile() 
        {
            try {
                const apiBase = `http://localhost:3000`
                // if username is supplied, use it rather than than ID
                const apiUrl = username? `${apiBase}/user/${username}` : `${apiBase}/users/${id}`

                const user = await axios.get(apiUrl)
                if(user.data)
                    setUserProfile({...user.data, fetchStatus: "done"})
                else
                    setUserProfile({fetchStatus: "not-found"})
            }
            catch(err) {
                console.log(`Error fetching user: ${err}`)
                return {fetchStatus: "error"}
            }
        }

        fetchUserProfile()
    }, [id, username])

    return userProfile
}

export default useUserProfile
