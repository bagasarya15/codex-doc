import models from "../models/init-models.js";
import multer from "multer";
import fs from "fs"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './image')
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname
        cb(null, fileName )
    }
})

const upload = multer({ storage: storage }).single("image")

const createProduk = async (req, res) => {
    try {
        upload(req, res, async function (error) {
            
            const checkProduct= await models.product.findOne({
                where: { name: req.body.name }
            });

            if (checkProduct) {
                return res.status(400).json({ 
                    message : 'Produk sudah ada, coba buat dengan nama produk yang berbeda!', 
                });
            }
            
            const categoryBody = await req.body.category_id
            
            if(categoryBody == '') {
                return res.status(500).json({
                    message: 'Category tidak boleh kosong!'
                })
            }

            if (error instanceof multer.MulterError) {
                return res.status(500).json({
                    message: 'Gagal mengupload gambar!'
                })
            }
            
            const product = await models.product.create({
                name: req.body.name,
                description: req.body.description,
                category_id: categoryBody,
                price: req.body.price,
                image: req.file.filename
            })

            let success = {
                message : 'Data produk berhasil ditambah',
                status  : '202',
                result  : product    
            }

            res.status(202).send(success)
        })

    } catch (error) {
        res.send(error.message)
    }
}

const updateProduk = async (req, res) => {
    try {
        upload(req, res, async function (error) {

            const product = await models.product.findByPk(req.params.id)

            if (!product) throw new Error('Produk tidak ditemukan!')

            // Delete gambar sebelumnya
            const oldImagePath = './image/' + product.image
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath)
            }

            // Update product data
            const updatedProduct = await product.update({
                name: req.body.name,
                description: req.body.description,
                category_id: req.body.category_id,
                price: req.body.price,
                image: req.file.filename
            })

            let success = {
                message : 'Data produk berhasil diperbarui',
                status  : '202',
                result  : updatedProduct    
            }

            res.status(202).send(success)
        })
    } catch (error) {
        res.send(error.message)
    }
}

const updateCategory = async (req, res) => {
    try {
        const category = await models.product_category.findByPk(req.params.id)
        if(!category) throw new Error('Kategori produk tidak ditemukan')

        await models.product_category.update({
            name: req.body.name,
            description: req.body.desc
        },{
            where: { id: category.id }
        })
        
        let success = {
            message : 'Kategori berhasi diperbarui',
            result  : category
        }

        res.status(202).send(success)
        // res.status(202).json({
        //     message: 'Kategori'
        // })
    } catch (error) {
        res.send(error.message)
    }
}

export default {
    createProduk,
    updateProduk,
    updateCategory
}