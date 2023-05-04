import models from "../models/init-models.js";

const GetOrderDetail = async (req, res) => {
    try {
        const orderDetail = await models.order_detail.findAll({
            attributes:["id","order_id", "product_id", "quantity", "createdat", "updateat"],
            include: [
                {
                    model: models.product, as:'product',
                    attributes: ["name", "price", "description"],
                    include: [{
                        model: models.product_category, as:'category',
                        attributes: ["name", "description"]
                    }]
                },
                {
                    model: models.orders, as: 'order',
                    attributes: ["totalproduct", "totalprice"],
                    include:[{
                        model: models.users, as: 'user',
                        attributes: ["username",]
                    }]
                }
            ]
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