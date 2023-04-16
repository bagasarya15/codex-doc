import models from "../models/init-models.js";
import { QueryTypes, Sequelize } from "sequelize"

const GetProduct = async (req, res)=> {
    try {

        const sequelize = new Sequelize('eProduct', 'postgres', 'mozarl00', {
            dialect: 'postgresql'
        });  
        
        const data = await sequelize.query(`select product.name as prodName, product_category.name as catName from product
        join product_category on product.category_id = product_category.id
        `,{
            type: QueryTypes.SELECT
        })
        // const data = await models.product.findAll();

        let succes = {
            message: 'success',
            status: '202', 
            result: data, 
        }

        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const GetProductById = async(req, res) => {
    try {
        const data = await models.product.findByPk(req.params.id)
        if(!data) throw new Error('Data tidak ditemukan!')
        
        let succes = {
            message: 'success',
            status: '202', 
            result: data, 
        }

        res.status(200).send(succes)

    } catch (error) {
        res.send(error.message)
    }}

const CreateProduct = async (req, res) => {
    try {
        const data = await models.product.create({
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category_id,
            price: req.body.price,
            image: req.body.image
        })

        let success = {
            message: 'Data produk berhasil ditambahkan',
            status: '202',
            result: data    
        }

        res.status(202).send(success)

    } catch (error) {
        res.send(error.message)
    }
}

export default{
    GetProduct,
    GetProductById,
    CreateProduct
}