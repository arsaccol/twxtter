import { useEffect, useState } from 'react'
import axios from 'axios'

function useUserPosts(username) {
    const [userPosts, setUserPosts] = useState({posts: [], fetchStatus: "fetching"})

    useEffect(() => {
        async function fetchUserPosts()
        {
            try {
                const response = await axios.get(`http://localhost:3000/user/${username}/posts`)

                if(response.data.length > 0)
                    setUserPosts({posts: response.data, fetchStatus: "fetched"})
                else
                    setUserPosts({posts: [], fetchStatus: "not-found"})
            } 
            catch (err) {
                console.log(`Error fetching posts of user ${username}: ${err}`)
                return { fetchStatus: "error" }
            }
        }

        fetchUserPosts()
    }, [username])

    return userPosts
}


export default useUserPosts
