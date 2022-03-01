import { useEffect, useState } from 'react'
import axios from 'axios'

function useUserPosts(userId) {
    const [userPosts, setUserPosts] = useState({posts: [], fetchStatus: "fetching"})

    useEffect(async() => {

        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}/posts`)

            if(response.data.length > 0)
                setUserPosts({posts: response.data, fetchStatus: "fetched"})
            else
                setUserPosts({posts: [], fetchStatus: "not-found"})
        } 
        catch (err) {
            console.log(`Error fetching posts of user ${userId}: ${err}`)
            return { fetchStatus: "error" }
        }

    }, [userId])

    return userPosts
}


export default useUserPosts
