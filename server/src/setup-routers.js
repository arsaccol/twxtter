
import express from 'express'
import { UserRouter } from './routers/user-router.js'
import { PostRouter } from './routers/post-router.js'

const rootRouter = express.Router()
rootRouter.use(express.json())

rootRouter.get('/', (req, res) => {
    res.send('<h1>Hello from the API</h1>')
})


rootRouter.use(UserRouter)
rootRouter.use(PostRouter)


export { rootRouter as Router }
