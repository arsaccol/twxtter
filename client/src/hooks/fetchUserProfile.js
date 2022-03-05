import React, { useEffect, useState } from 'react'
import axios from 'axios'


function useUserProfile(userId) {
    const [userProfile, setUserProfile] = useState({fetchStatus: "fetching"})

    useEffect(() => {
        async function fetchUserProfile() 
        {
            try {
                const user = await axios.get(`http://localhost:3000/users/${userId}`)
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
    }, [userId])

    return userProfile
}

export default useUserProfile
