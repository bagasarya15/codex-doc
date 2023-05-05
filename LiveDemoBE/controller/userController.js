import models from "../models/init-models.js";
import bcrypt from 'bcrypt'

const GetUser = async (req, res) => {

} 

const CreateUser = async(req, res) => {
    let users = ''
    try {
        const salt =  await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(req.body.password, salt)

        users = await models.users.create({
            username : req.body.username,
            password : passHash
        })

        const customer = await models.customer.create({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            user_id : users.id
        })

        res.status(202).json({
            message: "success",
        })
    } catch (error) {
        console.log(users);
        if(users){
            await models.users.destroy({
                where: {
                    id: users.id
                }
            })
        }
        error.message
    }
}

export default {
    CreateUser
}