import models  from '../models/init-models.js'
import bcrypt from 'bcrypt' // install terlebih dahulu npm install bcrypt

// const getAllUser = async (req, res) => {
//     result
// }

const GetUsers = async (req, res)=>{
    try {
        const data = await models.users.findAll();

        res.status(202).json({
            message:"success",
            data: data
        })

        // let succes = {result:result, status:'202', message:'success'}
        // res.status(200).send(succes)

    } catch (error) {
        res.send(error.message)
    }
};

const GetUsersById = async (req, res)=>{
    try {
        const result = await models.users.findByPk(req.params.id);
        
        let succes = {result:result, status:'202', message:'success'}
        res.status(200).send(succes)

    } catch (error) {
        res.send(error.message)
    }
};

const CreateUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(req.body.pswd, salt)

        const data = await models.users.create({
            username : req.body.username,
            password : passHash,
        })

        res.status(202).json({
            message:"Data user berhasil ditambah",
            data: data

        })

    } catch (error) {
        res.send(error.message)
    }
}

const UpdateUser = async(req,res) => {
    try {
        const idBody = await models.users.findByPk(req.params.id)
        if(!idBody) throw new Error('ID tidak ditemukan!')

        let password = idBody.password
        let salt = await bcrypt.genSalt(10)
        let passHash = await bcrypt.hash(req.body.password, salt)

        if(req.body.password){
            password = passHash
        }
        
        const data = await models.users.update({
            username: req.body.username,
            password: password
        },{
            where: {
                id: idBody.id
            }
        })

        res.status(200).json({
            message: `Data user id ${data} berhasil diupdate`,
            data: idBody,
        })

    } catch (error) {
        res.send(error.message)
    }
}

const DeleteUser = async(req,res) => {
    try {
        const idBody = await models.users.findByPk(req.params.id)
        if(!idBody) throw new Error('ID tidak ditemukan')

        await models.users.destroy({
            where:{
                id: idBody.id
            }
        })
        res.status(200).json({
            message: `Data user id ${idBody.id} berhasil dihapus`,
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}


export default{
    GetUsers,
    GetUsersById,
    CreateUser,
    UpdateUser,
    DeleteUser
}