import express from 'express'
import db from './db.js'
import models from './models.js'

class API
{
    // like in server, this is our "async constructor" factory thingie
    static async createAPI()
    {
        const api = new API()
        await api.initSequelize()
        api.initExpress()

        return api
    }


    async initSequelize(forceSync)
    {
        console.log(`Attempting to connect to database...`)
        try {
            this.sequelize = db.connectSequelize()
            models.getDefinitions(this.sequelize)
            await this.sequelize.sync({force: forceSync})
        }
        catch(err) {
            console.log(err)
        }
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