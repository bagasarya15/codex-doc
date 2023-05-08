import models from "../models/init-models.js"

const DeleteCategoryProduct = async(req, res) => {
    try {
        const categoryProduct = await models.product_category.findByPk(req.params.id)
        if(!categoryProduct) throw new Error('Kategori produk tidak ditemukan!')

        // check if category id is used in product table
        const product = await models.product.findOne({
            where:{
                category_id  : categoryProduct.id
            }
        })
        if(product) throw new Error('Kategori produk sedang digunakan di produk! Tidak dapat dihapus.')

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
    DeleteCategoryProduct
}