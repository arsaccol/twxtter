import express from 'express'
import { User } from '../models.js'

const router = express.Router()


router.get('/users/', async (req, res) => {
    try {
        const results = (await User.findAll()).map( user => {
            return {
                id: user.id,
                username: user.username,
            }
        })

        res.json(results)
    }
    catch(err) {
        console.log(`Error retrieving users: "${err}"`)
        res.send(500, "Error retrieving users")
    }
})


router.get('/users/:id(\\d+)', async (req, res) => {
    try {
        console.log(`Retrieving user with id: ${req.params.id}`)
        const result = await User.findOne({
            where: {
                id: req.params.id
            }
        })

        if(result) {
            console.log(`Found user: ${JSON.stringify(result, null, 2)}`)
            res.json({
                id: result.id,
                username: result.username,
                bio: result.bio,
            })
        }
        else {
            console.log(`User with id: ${req.params.id} not found`)
            res.json(null)
        }
    }
    catch(err) {
        console.log(`Error retrieving user: "${err}"`)
        res.send(500, "Error retrieving user")
    }
})


router.post('/users/', async (req, res) => {
    const {username, password} = req.body

    console.log(`username: "${username}", password: "${password}"`)


    if(username && password) {
        try {
            const createdUser = await User.create({username: username, password: password, isAdmin: false, bio: ""})

            const createdId = createdUser.id
            const createdUsername = createdUser.username

            console.log({id: createdId, username: createdUsername})

            res.json({id: createdId, username: createdUsername})
        }
        catch(err) {
            console.log(`Error creating user: "${err}"`)
            res.send(500, 'Error creating user')
        }
    }
    else {
        res.send(400, "Data missing")
    }
})


router.patch('/users/:id', async (req, res) => {
    const id = req.params.id
    const { bio } = req.body

    console.log(`Updating bio of user with id "${id}" to: ${bio}`)

    //User.patch(id, {bio: bio})
    try {
        const [affectedNumber, affectedElements] = await User.update({bio: bio}, {where: {id: id}})

        if(affectedNumber > 0) {
            console.log(`Updated bio of user with id "${id}" to: ${bio}`)
            res.json({id: id, bio: bio})
        }
        else {
            console.log(`User with id "${id}" not found`)
            res.json(null)
        }
    }
    catch (err) {
        console.log(`Error updating user: "${err}"`)
        res.send(500, "Error updating user")
    }

    // for now, we're only patching the bio


})

export { router as UserRouter }
