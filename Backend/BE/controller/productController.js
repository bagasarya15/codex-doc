import models from "../models/init-models.js";
import multer from "multer";
import fs from 'fs';

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './image')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
//     }
// })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './image')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        const date = Date.now()
        cb(null, date + '-' + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Hanya file gambar yang diizinkan!'))
        }
        cb(null, true)
    }
}).single('image')

const GetProduct = async (req, res)=> {
    try {
        const product = await models.product.findAll({
            attributes:["id","name", "description", "price", "image"],
            include: [{
                model: models.product_category, as:'category',
                attributes: ["name"],
            }]
        });
        
        let succes = {
            message :'success',
            result  :product, 
            status  :'202', 
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const GetProductById = async(req, res) => {
    try {
        const product = await models.product.findOne({
            where:{id: req.params.id},
            attributes:["name", "description", "price", "image"],
            include: [{
                model: models.product_category, as:'category',
                attributes: ["name"],
            }]
        });

        if(!product) throw new Error('Data produk tidak ditemukan!')
        
        let succes = {
            message : 'success',
            result  : product, 
            status  : '202', 
        }
        
        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const CreateProduct = async (req, res) => {
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

const UpdateProduct = async (req, res) => {
    try {
        upload(req, res, async function (error) {
            if (error instanceof multer.MulterError) {
                return res.status(500).json({
                    message: 'Gagal mengupload gambar!'
                })
            }

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

const DeleteProduct = async (req, res) => {
    try {
        const product = await models.product.findByPk(req.params.id)

        if(!product) throw new Error('Produk tidak ditemukan!')

        // Delete gambar
        const imagePath = './image/' + product.image
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

        // Delete product data
        await product.destroy()

        let success = {
            message : 'Data produk berhasil dihapus',
            status  : '202'
        }

        res.status(202).send(success)
    } catch (error) {
        res.send(error.message)
    }
}

export default{
    GetProduct,
    GetProductById,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}