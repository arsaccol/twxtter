import express from "express"
import { Post } from '../models.js'

const router = express.Router()

router.get('/posts/', async (req, res) => {
    try {
        const results = await Post.findAll()
            res.json(results)
    }
    catch(err) {
        console.log(`Error retrieving posts`)
        res.send(500, "Error retrieving posts")
    }
})

export { router as PostRouter }