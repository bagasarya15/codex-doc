import models from '../models/init-models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const Login = async(req, res) => {
    try {
        const users = await models.users.findOne({
            where: {
                username: req.body.username
            }
        })

        if(!users) throw new Error("Username tidak ditemukan")

        const matchPassword = await bcrypt.compare(req.body.password, users.password)

        if(!matchPassword) throw new Error("Password salah")

        const token = jwt.sign({username: users.username}, process.env.ACCESS_TOKEN,{
            expiresIn: '10m'
        })

        let succes = {
            message : "Login succes",
            status  : 202,
            token   : token
        }
        
        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const checkToken = (req, res, next) => {
    const token = req.headers.authorization
    if(!token) return res.send('Access Denied')

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN)
        next()

    } catch (error) {
        res.send(error.message)
    }
}

export default {
    Login,
    checkToken
}