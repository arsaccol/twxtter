import express from "express"
import { Post, User } from '../models.js'

const router = express.Router()

router.get('/users/:id/posts/', async (req, res) => {
    try {
        const results = await Post.findAll({
            where: {
                userId: req.params.id
            }
        })
        res.json(results)
    }
    catch(err) {
        console.log(`Error retrieving posts: ${err}`)
        res.send(500, "Error retrieving posts")
    }
})


router.post('/users/:id/posts/', async(req, res) => {
    try {
        const { id } = req.params
        const user = (await User.findOne({ where: { id: id } }))

        const { content } = req.body

        console.log(`CREATING POST FOR USER "${id}" WITH CONTENT "${content}"`)

        const postTime = Date.now()

        if(content) {
            const createdPost = user.createPost({
                postTime: postTime,
                content: content
            })

            console.log({id: createdPost.id, content: createdPost.content, postTime: createdPost.postTime})

            res.json(createdPost)
        }

    }
    catch(err) {
        console.log(`Error creating post: "${err}"`)
        res.send(500, "Error creating post")
    }
})

export { router as PostRouter }
