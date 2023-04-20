import models from "../models/init-models.js";

const GetCategoryProduct = async (req , res) => {
    try {
        const categoryProduct = await models.product_category.findAll();

        let succes = {
            message : "success",
            status  : '202',
            result  : categoryProduct
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const GetCategoryProductById = async (req , res) => {
    try {
        const categoryProduct = await models.product_category.findByPk(req.params.id);
        if(!categoryProduct) throw new Error('Kategori produk tidak ditemukan!')

        let succes = {
            message : 'success',
            status  : '202', 
            result  : categoryProduct, 
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const CreateCategoryProduct = async (req, res) => {
    try {
        const categoryProduct = await models.product_category.create({
            name        : req.body.name,
            description : req.body.description
        })

        let succes = {
            message : 'Kategori produk berhasil ditambah!',
            status  : '202',
            result  : categoryProduct
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateCategoryProduct = async (req, res) => {
    try {
        const categoryProduct = await models.product_category.findByPk(req.params.id)
        if(!categoryProduct) throw new Error('Kategori produk tidak ditemukan!')

        await models.product_category.update({
            name        :req.body.name,
            description :req.body.description
        },{
            where:{
                id  : categoryProduct.id
            }
        })

        let succes = {
            message : `Data kategori produk  id : ${categoryProduct.id} berhasil diperbarui!`,
            status  : '202',
            result  : categoryProduct
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteCategoryProduct = async(req, res) => {
    try {
        const categoryProduct = await models.product_category.findByPk(req.params.id)
        if(!categoryProduct) throw new Error('Kategori produk tidak ditemukan!')

        await models.product_category.destroy({
            where:{
                id  : categoryProduct.id
            }
        })

        let succes = {
            message : `Kategori produk id : ${categoryProduct.id} berhasil dihapus!`,
            status  : '202',
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

export default {
    GetCategoryProduct,
    GetCategoryProductById,
    CreateCategoryProduct,
    UpdateCategoryProduct,
    DeleteCategoryProduct
}