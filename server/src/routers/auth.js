import express from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    try{
        const user = await User.findOne(({ where: { username: username } }))
        if (!user) {
          res.status(400).send({ error: 'User not found' })
        }
        if (!await bcrypt.compare(password, user.password)) {
          res.status(400).send({ error: 'Invalid password' })
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_KEY)

        res.json({id: user.id, username: user.username, token})
    }
    catch(err) {
        console.log(`Error during login of user ${username}: ${err}`)
        res.status(500).send({ error: 'Something went wrong' })
    }
})

// for debug purposes
router.get('/login/debug/:username', async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ where: { username: username } })
        res.json(user? user : { error: 'User not found' })
    } catch (error) {
        return res.status(400).send({ error: 'User not found' })
    }
})

export { router as LoginRouter }
