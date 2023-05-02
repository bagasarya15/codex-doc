import models from "../models/init-models.js";

const GetOrderDetail = async (req, res) => {
    try {
        const orderDetail = await models.order_detail.findAll({
            attributes:["id","order_id", "product_id", "quantity", "createdat", "updateat"],
            include: [{
                model: models.product, as:'product',
                attributes: ["name"],
            }]
        });
        
        let succes = {
            message : 'succes',
            status  : 202,
            result  : orderDetail
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

export default {
    GetOrderDetail,
}