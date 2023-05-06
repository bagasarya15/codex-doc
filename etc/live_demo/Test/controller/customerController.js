import models, {sequelize} from '../models/init-models.js'

const GetAllCustomer = async (req, res) => {
    try {
        // let query = `SELECT users.username, customer.firstname, customer.lastname FROM customer JOIN users ON customer.user_id = users.id`
        // const customer = await sequelize.query(query)

        // const customer = await models.customer.findAll({
        //     include:[{
        //         model: models.users, as: 'user',
        //         attributes: ["username"]
        //     }]
        // })
        
        const customer = await sequelize.query(`SELECT * FROM customerXusers`)
        // const customer = await sequelize.query(`SELECT * FROM selectView`)

        res.status(202).json({
            message : 'success',
            result  : customer[0]
        })
    } catch (error) {
        res.send(error.message)
    }
} 

export default {
    GetAllCustomer
}