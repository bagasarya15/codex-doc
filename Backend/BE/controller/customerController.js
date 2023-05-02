import models from "../models/init-models.js";

const GetCustomer = async (req, res)=> {
    try {
        const customer = await models.customer.findAll({
            attributes:["firstname", "lastname", "createdat", "updateat"],
            include: [{
                model: models.users, as:'user',
                attributes: ["username"],
            }]
        })

        let succes = {
            message :'success',
            status  :'202', 
            result  :customer, 
        }

        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const GetCustomerById = async (req, res) => {
    try {
        const customer = await models.customer.findOne({
            where:{id: req.params.id},
            attributes:["firstname", "lastname", "createdat", "updateat"],
            include: [{
                model: models.users, as:'user',
                attributes: ["username"],
            }]
        });

        if(!customer) throw new Error('Data customer tidak ditemukan!')

        let succes = {
            message :'success',
            status  :'202', 
            result  :customer, 
        }

        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const CreateCustomer = async (req, res) => {
    try {
        const customer = await models.customer.create({
            firstname:req.body.firstname,
            lastname: req.body.lastname,
            user_id: req.body.user_id,
        })

        let succes = {
            message : 'Data customer berhasil ditambah',
            status  : '202',
            result  : customer
        }

        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateCustomer = async (req, res) => {
    try {
        const customer = await models.customer.findByPk(req.params.id)
        if(!customer) throw new Error('Customer tidak ditemukan!')

        await models.customer.update({
            firstname:req.body.firstname,
            lastname: req.body.lastname,
            user_id: req.body.user_id,
        },{
            where:{
                id: idBody.id
            }
        })

        let succes = {
            message : `Data customer id: ${customer.id} berhasil diperbarui`,
            status  : '202',
            result  :  customer
        }
        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteCustomer = async (req, res) => {
    try {
        const customer = await models.customer.findByPk(req.params.id)
        if(!customer) throw new Error('Customer tidak ditemukan')

        await models.customer.destroy({
            where:{
                id: customer.id
            }
        })

        let succes = {
            message: `Data customer id: ${customer.id} berhasil dihapus`,
            status: '202'
        }
        
        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

export default{
    GetCustomer,
    GetCustomerById,
    CreateCustomer,
    UpdateCustomer,
    DeleteCustomer
}