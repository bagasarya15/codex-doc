import models,{sequelize}  from '../models/init-models.js'
import bcrypt from 'bcrypt' // install terlebih dahulu npm install bcrypt
// import messageHelper from '../helper/helper.js'

const messageHelper = (result, status, message) => {
    return {
        message: message,
        status: status,
        result: result,
    };
};

const GetUsers = async (req, res)=>{
    try {
        const data = await models.users.findAll();

        let succes = {
            message:'success',
            status:'202', 
            result:data, 
        }
        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
};

const GetUsersById = async (req, res)=>{
    try {
        const data = await models.users.findByPk(req.params.id);

        if(!data) throw new Error('Data user tidak ditemukan')

        let succes = {
            message:'success',
            status:'202', 
            result:data, 
        }
        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
};

const CreateUserCustomer = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(req.body.password, salt);
        req.body.password = passHash;

        const data = `[${JSON.stringify(req.body)}]`;

        const query = `CALL InsertData('${data}')`;
        const result = await sequelize.query(query);

        res.send(messageHelper(result, 200, "sukses"));
    } catch (err) {
        res.send(messageHelper(err.message, 400, "gagal"));
    }
}

const CreateUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(req.body.pswd, salt)

        const data = await models.users.create({
            username : req.body.username,
            password : passHash,
        })

        let succes = {
            message:'Data users berhasil ditambah',
            status:'202', 
            result:data, 
        }
        res.status(200).send(succes)

    } catch (error) {
        res.send(error.message)
    }
}

// const CreateUser = async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const passHash = await bcrypt.hash(req.body.pswd, salt)

//         const data = await models.users.create({
//             username : req.body.username,
//             password : passHash,
//         })

//         let succes = {
//             message:'Data users berhasil ditambah',
//             status:'202', 
//             result:data, 
//         }
//         res.status(200).send(succes)

//     } catch (error) {
//         res.send(error.message)
//     }
// }

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
    CreateUserCustomer,
    UpdateUser,
    DeleteUser
}