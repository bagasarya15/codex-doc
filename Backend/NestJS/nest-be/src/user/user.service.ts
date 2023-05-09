import { Injectable } from '@nestjs/common';
import { users } from 'models';
import { customer } from 'models';
// import bcrypt from 'bcrypt'
import * as bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UserService {

    constructor( private sequelize: Sequelize ){}

    async findAll(): Promise<users[]> {
        try {
            const result = await users.findAll();
            return result;

        } catch (error) {
            return error;
        }
    }

    async CreateUsers( dataBody:any ): Promise<any> {
        let dataUser:any = '';
        let dataCustomer:any = '';

        try {
            const salt = await bcrypt.genSalt(10);
            const passHash = await bcrypt.hash(dataBody.password, salt);

            dataUser = await users.create({
                username: dataBody.username,
                password: passHash,
            });

            dataCustomer = await customer.create({
                user_id: dataUser.id,
                firstname: dataBody.firstname,
                lastname: dataBody.lastname
            })
            
            return ['Data User & Customer berhasil ditambah', dataUser] 
        } catch (error) {
            if(dataUser){
                users.destroy({
                    where:{
                        id: dataUser.id
                    }
                })
            }
            return error.message;
        }
    }

    async CreateUserCustomer ( dataBody:any ) : Promise<any> {
        let dataUser:any = '';

        try {
            const salt = await bcrypt.genSalt(10);
            const passHash = await bcrypt.hash(dataBody.password, salt);
            
            dataBody.password = passHash;
    
            dataUser = `[${JSON.stringify(dataBody)}]`;
            const query = `CALL InsertDataUserCustomer('${dataUser}')`;
            const result = await this.sequelize.query(query);

            return result
        } catch (error) {
            return error.message
        }
    }
}
