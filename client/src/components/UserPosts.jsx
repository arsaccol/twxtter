import React from 'react'

import useUserPosts from '../hooks/useUserPosts.js'
import TimeAgoDisplay from './TimeAgoDisplay.jsx'

function UserPosts({username}) {
    const className = 'UserPosts'

    const { posts } = useUserPosts(username)

    console.log(`Posts from user ${username}: ${posts}`)

    return (
        <div className={className}>
            <ul>
                {posts.map(post => (
                        <li key={post.id} className="PostDisplay">
                            <div className="PostContent">{post.content}</div>
                            <div className="PostTime"> <TimeAgoDisplay date={post.createdAt}></TimeAgoDisplay></div>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPosts
