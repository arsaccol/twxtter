import { useEffect, useState } from 'react'
import axios from 'axios'


function useUserProfile({ id, username }) {
    const [userProfile, setUserProfile] = useState({fetchStatus: "fetching"})

    useEffect(() => {
        async function fetchUserProfile() 
        {
            try {
                const user = await axios.get(`http://localhost:3000/users/${id}`)
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
    }, [id])

    return userProfile
}

export default useUserProfile
