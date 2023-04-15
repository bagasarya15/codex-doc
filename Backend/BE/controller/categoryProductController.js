import models from "../models/init-models.js";

const GetCategoryProduct = async (req , res)=> {
    try {
        const data = await models.product_category.findAll();

        res.status(202).json({
            message:"success",
            data: data
        })
    } catch (error) {
        res.send(error.message)
    }
}

const GetCategoryProductById = async (req , res)=> {
    try {
        const data = await models.product_category.findByPk(req.params.id);

        res.status(202).json({
            message:"success",
            data: data
        })
    } catch (error) {
        res.send(error.message)
    }
}

const CreateCategoryProduct = async (req, res) => {
    try {
        const data = await models.product_category.create({
            name: req.body.name,
            description: req.body.description
        })

        res.status(202).json({
            message:"Data category berhasil ditambah",
            data: data
        })

    } catch (error) {
        res.send(error.message)
    }
}

const UpdateCategoryProduct = async (req, res) =>{
    try {
        const idBody = await models.product_category.findByPk(req.params.id)
        if(!idBody) throw new Error('ID tidak ditemukan!')

        const data = await models.product_category.update({
            name:req.body.name,
            description:req.body.description
        },{
            where:{
                id: idBody.id
            }
        })

        res.status(202).json({
            message:"Data category berhasil diupdate",
            data: idBody,
            result: data
        })

    } catch (error) {
        res.send(error.message)
    }
}

const DeleteCategoryProduct = async(req, res) => {
    try {
        const idBody = await models.product_category.findByPk(req.params.id)
        if(!idBody) throw new Error('ID tidak ditemukan')

        await models.product_category.destroy({
            where:{
                id: idBody.id
            }
        })
        res.status(200).json({
            message: `Data product id ${idBody.id} berhasil dihapus`,
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export default {
    GetCategoryProduct,
    GetCategoryProductById,
    CreateCategoryProduct,
    UpdateCategoryProduct,
    DeleteCategoryProduct
}