import express from 'express'
import models from './setup-models.js'

class API
{
    // like in server, this is our "async constructor" factory thingie
    static async createAPI()
    {
        const api = new API()
        api.initExpress()

        return api
    }


    initExpress()
    {
        const port = process.env.NODE_PORT
        const host = process.env.NODE_HOST

        this.app = express()

        const router = express.Router()

        router.get('/', (req, res) => {
            res.send('<h1>Hello from the API</h1>')
        })

        this.app.use('/', router)

        this.app.listen(port, host, () => {
            console.log(`Listening ${host} on port ${port}`)
        })
    }

}


export default API
