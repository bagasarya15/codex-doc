import models, { sequelize } from "../models/init-models.js"
import bcrypt from "bcrypt"

const GetAllUser = async(req, res) => {
    try {
        // const users = await models.users.findAll()
        // const users = await sequelize.query('SELECT * FROM selectUserCustomer')
        const users = await models.users.findAll({
            include:[{
                model: models.customer, as : 'customers',
                attributes:["firstname", "lastname"]
            }]
        })

        res.status(202).json({
            message: 'success',
            result : users
        })
    } catch (error) {
        res.send(error.message)
    }
}


const InsertProcedure = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(req.body.password, salt)

        req.body.password = passHash

        const users = `[${JSON.stringify(req.body)}]`
        const query = `CALL InsertDataUserCustomer('${users}')`
        const result = await sequelize.query(query)

        res.status(202).json({
            message: 'success insert procedure'
        })
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateProcedure = async (req, res) => {
    try {
        const users = await models.users.findByPk(req.params.id)
        if(!users) throw new Error('ID users tidak ditemukan!')

        let salt = await bcrypt.genSalt(10)
        let passHash = await bcrypt.hash(req.body.password, salt)

        const {username,firstname,lastname} = req.body

        const query = await sequelize.query(
            "CALL UpdateUserCustomer(:users_id,:username,:password,:firstname,:lastname)",
            {
                replacements: {
                users_id: users.id,
                username:username,
                password: passHash,
                firstname : firstname,
                lastname:lastname
                },
            }
        );
        res.status(202).json({
            message: 'Success',
            result : query
        })
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteUserCustomer = async (req, res) => {
    try {
        const users = await models.users.findByPk(req.params.id)
        if(!users) throw new Error('User tidak ditemukan')
        
        await models.customer.destroy({
            where:{user_id : users.id}
        })

        await models.users.destroy({
            where:{id : users.id}
        })

        res.status(202).json({
            message: 'delete success'
        })
    } catch (error) {
        res.send(error.message)
    }
}

export default {
    GetAllUser,
    InsertProcedure,
    UpdateProcedure,
    DeleteUserCustomer
}