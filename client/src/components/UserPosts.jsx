import React from 'react'

import useUserPosts from '../hooks/useUserPosts.js'

function UserPosts({userId}) {
    const className = 'UserPosts'

    const {posts} = useUserPosts(userId)

    return (
        <div className={className}>
            <ul>
                {posts.map(post => (
                        <li key={post.id} className="PostDisplay">
                            <div className="PostContent">{post.content}</div>
                            <div className="PostTime">{post.createdAt}</div>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPosts
