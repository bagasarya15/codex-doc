import models from "../models/init-models.js";

const GetOrders = async (req, res) => {
    try {
        const orders = await models.orders.findAll({
            attributes:["id","user_id", "totalproduct", "totalprice", "createdat", "updateat"],
            include:[{
                model: models.users, as: 'user',
                attributes: ["username"]
            }]
        })

        let succes = {
            message : 'success',
            status  : 202,
            result  : orders
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const GetOrdersById = async (req, res) => {
    try {
        const orders = await models.orders.findOne({
            where:{id: req.params.id},
            attributes:["id", "user_id", "totalproduct", "totalprice", "createdat", "updateat"],
            include:[{
                model: models.users, as: 'user',
                attributes: ["username"]
            }]
        })
        
        if(!orders) throw new Error('Data orders tidak ditemukan')

        let succes = {
            message : 'success',
            status  : 202,
            result  : orders
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const CreateOrders = async (req, res) => {
    try {
        const validateUserId = req.body.user_id

        if(validateUserId == '')
        {
            throw new Error('User id harus di isi')
        }
        else if(isNaN(validateUserId))
        {
            throw new Error('Input user id hanya berupa angka')
        }
        else
        {
            const users = await models.users.findByPk(validateUserId)

            if (!users) 
            {
                throw new Error('User Id yang di input belum ada ditabel users')
            }

            const orders = await models.orders.create({
                user_id: validateUserId,
                totalproduct: req.body.totalproduct,
                totalprice: req.body.totalprice
            })

            let succes = {
                message : 'Data order berhasil dibuat',
                status  : 202,
                result  : orders
            }
            
            res.status(202).send(succes)
        }
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateOrders = async (req, res) => {
    try {
        const orders = await models.orders.findByPk(req.params.id)

        if(!orders) throw new Error('Data orders tidak ditemukan')

        const validateUserId = req.body.user_id

        if(validateUserId == '')
        {
            throw new Error('User id harus di isi')
        }
        else if(isNaN(validateUserId))
        {
            throw new Error('Input user id hanya berupa angka')
        }
        else
        {
            const users = await models.users.findByPk(validateUserId)

            if (!users) 
            {
                throw new Error('User Id yang di input belum ada ditabel users')
            }

            let updatedOrders = await orders.update({
                user_id: validateUserId,
                totalproduct: req.body.totalproduct,
                totalprice: req.body.totalprice
            })
    
            let succes = {
                message : 'Data order berhasil diperbarui',
                status  : 202,
                result  : updatedOrders
            }

            res.status(202).send(succes)
        }
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteOrders = async (req, res) => {
    try {
        const orders = await models.orders.findByPk(req.params.id)

        if(!orders) throw new Error('Data orders tidak ditemukan')

        await models.orders.destroy({
            where:{
                id: orders.id
            }
        })

        let succes = {
            message : `Data order id: ${orders.id} berhasil dihapus`,
            status  : 202,
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

export default {
    GetOrders,
    GetOrdersById,
    CreateOrders,
    UpdateOrders,
    DeleteOrders
}