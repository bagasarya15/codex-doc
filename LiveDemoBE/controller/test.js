import fs from 'fs'
import models from "../models/init-models.js";
import path from 'path'
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: '100000'},
    fileFilter: (req,file,cb)=>{
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname))
 
        if(mimeType && extname){
            return cb(null,true)
        }
        cb("Format file salah")
        // res.send('format file salah')
    }
}).single("image")

const getProducts = async(req,res) => {
    try {
        const data = await models.products.findAll({
            attributes: ['id','name','description','price','image'],
            include: [{
                model: models.product_categories,
                as : "category",
                attributes: ['name','description']
            }],
        });

        if(data.length === 0) throw new Error("Data tidak ditemukan")

        res.status(200).json({
            message: "Success",
            status: 200,
            data: data
        })

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const getProductById = async(req,res) => {
    try {
        const data = await models.products.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id','name','description','price','image'],
            include: [{
                model: models.product_categories,
                as : "category",
                attributes: ['name','description']
            }],
        });
        if(!data) throw new Error("Data tidak ditemukan")

        res.status(200).json({
            message: "Success",
            nana: req.params.nana,
            status: 200,
            data: data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const createProduct = async(req,res) => {
    try {
        const {name, description, category_id, price} = req.body
        const data = await models.products.create({
            name: name,
            description: description,
            category_id: category_id,
            price: price,
            image: req.file.filename
        })

        res.status(201).json({
            message: 'success',
            status: 201,
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const updateProduct = async(req,res) => {
    try {
        const findId = await models.products.findByPk(req.params.id);
        if(!findId) throw new Error('Product tidak ditemukan')

        const {name, description, category_id, price} = req.body

        let getImage = findId.image

        if(req.file){
            fs.unlinkSync('uploads/'+findId.image)
            getImage = req.file.filename
        }

        const data = await models.products.update({
            name: name,
            description: description,
            category_id: category_id,
            price: price,
            image: getImage
        },{
            where: {
                id: req.params.id
            }
        })

        res.status(201).json({
            message: "success",
            status: 201,
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

const deleteProduct = async(req,res) => {
    
    try {
        const findId = await models.products.findByPk(req.params.id);
        if(!findId) throw new Error('Product tidak ditemukan')
        
        fs.unlinkSync('uploads/'+findId.image)
        
        await models.products.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            message: "berhasil dihapus"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    upload
}