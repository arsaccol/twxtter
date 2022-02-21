import express from 'express'
import { Router } from './setup-routers.js'

class API
{
    // like in server, this is our "async constructor" factory thingie
    static async createAPI()
    {
        const api = new API()
        api.initServer()

        return api
    }


    initServer()
    {
        const port = process.env.NODE_PORT
        const host = process.env.NODE_HOST

        this.app = express()

        this.app.use('/', Router)
        console.log('Routers set up!')

        this.app.listen(port, host, () => {
            console.log(`Listening ${host} on port ${port}`)
        })
    }

}


export default API
