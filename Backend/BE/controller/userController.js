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
        const users = await models.users.findAll();

        let succes = {
            message :'success',
            status  :'202', 
            result  : users, 
        }

        res.status(200).send(succes)
    } catch (error) {
        res.send(error.message)
    }
};

const GetUsersById = async (req, res)=>{
    try {
        const users = await models.users.findByPk(req.params.id);

        if(!users) throw new Error('Data user tidak ditemukan')

        let succes = {
            message :'success',
            status  :'202', 
            result  : users, 
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

        const users = `[${JSON.stringify(req.body)}]`;
        const query = `CALL InsertDataUserCustomer('${users}')`;
        const result = await sequelize.query(query);

        res.send(messageHelper("Insert procedure data berhasil", 202, result));
    } catch (error) {
        res.send(messageHelper("Insert procedure data gagal", 500, error.message ));
    }
}

const CreateUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(req.body.pswd, salt)

        const users = await models.users.create({
            username : req.body.username,
            password : passHash,
        })

        let succes = {
            message:'Data users berhasil ditambah',
            status:'202', 
            result:users
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateUser = async(req,res) => {
    try {
        const users = await models.users.findByPk(req.params.id)
        if(!users) throw new Error('ID users tidak ditemukan!')

        let password = users.password
        let salt = await bcrypt.genSalt(10)
        let passHash = await bcrypt.hash(req.body.password, salt)

        if(req.body.password){
            password = passHash
        }
        
        await models.users.update({
            username: req.body.username,
            password: password
        },{
            where: {
                id: users.id
            }
        })

        let succes = {
            message : `Data user id ${users.id} berhasil diupdate`,
            status  : '202',
            result  :  users,
        }
        
        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteUser = async(req,res) => {
    try {
        const users = await models.users.findByPk(req.params.id)
        if(!users) throw new Error('ID tidak ditemukan')

        await models.users.destroy({
            where:{
                id: users.id
            }
        })

        let succes = {
            message : `Data user id ${users.id} berhasil dihapus`,
            status  : '202'
        }

        res.status(202).send(succes)
    } catch (error) {
        res.send(error.message)
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