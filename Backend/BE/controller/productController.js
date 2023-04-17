import models from "../models/init-models.js";
import multer from "multer";
import path from "path";


const GetProduct = async (req, res)=> {
    try {
        const data = await models.product.findAll({
            attributes:["id","name", "description", "price", "image"],
            include: [{
                model: models.product_category, as:'category',
                attributes: ["name"],
            }]
        });
        let succes = {
            message:'success',
            result:data, 
            status:'202', 
        }

        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const GetProductById = async(req, res) => {
    try {
        // const data = await models.product.findByPk(req.params.id)
        const data = await models.product.findOne({
            where:{id: req.params.id},
            attributes:["name", "description", "price", "image"],
            include: [{
                model: models.product_category, as:'category',
                attributes: ["name"],
            }]
        });

        if(!data) throw new Error('Data produk tidak ditemukan!')
        
        let succes = {
            message:'success',
            result:data, 
            status:'202', 
        }
        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

// const CreateProduct = async (req, res) => {
//     try {
//         const storage = multer.diskStorage({
//             destination: function (req, file, cb) {
//                 cb(null, './image')
//             },
//             filename: function (req, file, cb) {
//                 const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//                 cb(null, file.fieldname + '-' + uniqueSuffix)
//             }
//         })

//         const upload = multer(req.body.image,{storage: storage})

//         const data = await models.product.create({
//             name: req.body.name,
//             description: req.body.description,
//             category_id: req.body.category_id,
//             price: req.body.price,
//             image: upload
//         })

//         let success = {
//             message: 'Data produk berhasil ditambahkan',
//             status: '202',
//             result: data    
//         }

//         res.status(202).send(success)

//     } catch (error) {
//         res.send(error.message)
//     }
// }

const CreateProduct = async (req, res) => {
    try {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './image')
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
            }
        })
        
        const upload = multer({
            storage: storage,
            fileFilter: function (req, file, cb) {
                if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                    return cb(new Error('Only image files are allowed!'))
                }
                cb(null, true)
            }
        }).single('image')
        

        upload(req, res, async function (error) {
            if (error instanceof multer.MulterError) {
                return res.status(500).json({message: 'Error upload gambar'})
            }

            const data = await models.product.create({
                name: req.body.name,
                description: req.body.description,
                category_id: req.body.category_id,
                price: req.body.price,
                image: req.file.filename
            })

            let success = {
                message: 'Data produk berhasil ditambahkan',
                status: '202',
                result: data    
            }

            res.status(202).send(success)
        })

    } catch (error) {
        res.send(error.message)
    }
}

const UpdateProduct = async (req, res) => {
    try {
        const idBody = await models.product.findByPk(req.params.id)
        if(!idBody) throw new Error('Id produk tidak ditemukan!')

        const data = await models.product.update({
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category_id,
            price: req.body.price,
            image: req.body.image
        },{
            where:{
                id: idBody.id
            }
        })

        let succes = {
            message: `Data produk ${data} berhasil diupdate`,
            status: '202',
            result: idBody
        }
        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteProduct = async (req, res) => {
    try {
        const idBody = await models.product.findByPk(req.params.id)
        if(!idBody) throw new Error('Id product tidak ditemukan')

        const data = await models.product.destroy({
            where:{
                id: idBody.id
            }
        })

        let succes = {
            message: `Data produk berhasil dihapus`,
            status: '202'
        }
        res.status(202).send(succes)
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