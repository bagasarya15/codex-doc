import models, { sequelize } from "../models/init-models.js";
import multer from "multer";
import fs from "fs";

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

        const query = await sequelize.query ('UPDATE name = ?')
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

const CreateProduct = async(req, res) => {
    try {
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.send('Gagal upload image')
            }else if (err){
                res.send(err.message)
            }
            
            const categoryBody = req.body.category_id
            const priceBody    = req.body.price

            if(!categoryBody) {
                res.send('Kategori tidak boleh kosong')
            }else if(isNaN(priceBody)){
                res.send('Price harus berupa angka')
            }

            console.log(req.file);
            const product = await models.product.create({
                name: req.body.name,
                description : req.body.description,
                category_id: categoryBody,
                price: priceBody,
                image: req.file.filename
            })

            res.status(202).json({
                message : "Data produk berhasil dibuat",
                status: 202,
                return: product
            })
        })
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateProduct = async (req, res) => {
    try {
        const product = await models.product.findByPk(req.params.id)

        if (!product) return res.send('Produk tidak ditemukan!')
        
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.send('Gagal upload image')
            }else if (err){
                res.send(err.message)
            }

            const oldImagePath = './image/' + product.image
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath)
            }
            
            const result = await product.update({
                name: req.body.name,
                description : req.body.description,
                category_id: req.body.category_id,
                price: req.body.price,
                image: req.file.filename
            })

            res.status(202).json({
                message : "Data produk berhasil diperbarui",
                status: 202,
                return: result
            })
            
        })
    } catch (error) {
        error.message
    }
}

const DeleteProduct = async (req, res) => {
    try {
        const product = await models.product.findByPk(req.params.id)

        if(!product) throw new Error('Produk tidak ditemukan!')

        const imagePath = './image/' + product.image
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }
        await product.destroy()

        res.status(202).json({
            message: 'Data produk berhasil dihapus'
        })
    } catch (error) {
        res.send(error.message)
    }
}

export default {
    GetProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}