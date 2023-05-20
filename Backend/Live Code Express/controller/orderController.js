import {sequelize} from "../models/init-models.js"

const OrderSP = async (req, res) => {
    try {
        const order = req.body
        let user_id = 0
        let totalproduct = 0
        let totalprice = 0

        order.forEach(req => {
            user_id = req.user_id,
            totalprice += req.quantity * req.price,
            totalproduct += req.quantity
        })

        let object = {"user_id" : user_id, "totalproduct": totalproduct, "totalprice":totalprice }

        const data1  = `[${JSON.stringify(object)}]`
        const data2  = `${JSON.stringify(order)}`

        const query = `CALL InsertOrderSP ('${data1}', '${data2}')`
        const result = await sequelize.query(query)

        res.status(202).json({
            message : 'insert sp berhasil',
            result : result
        })

    } catch (error) {
        res.send(error.message)
    }
}

export default {
    OrderSP
}