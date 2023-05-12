import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';
import {
  customer,
  order_detail,
  orders,
  product,
  product_category,
  users,
} from 'models';
import { roles } from 'models/roles';

@Injectable()
export class UsersService {
  constructor(private sequelize: Sequelize) {}

  async create(createUserDto: CreateUserDto) {
    let dataUser: any = '';
    try {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(createUserDto.password, salt);

      createUserDto.password = passHash;

      dataUser = `[${JSON.stringify(createUserDto)}]`;
      const query = `CALL InsertDataUserCustomer('${dataUser}')`;
      const result = await this.sequelize.query(query);

      let success = {
        message: 'Insert user dan customer berhasil',
        result: result,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const dataUser = await users.findAll({
        include: [
          {
            model: roles
          },
          {
            model: customer,
          },
          {
            model: orders,
            include: [
              {
                model: order_detail,
                include: [
                  {
                    model: product,
                    include: [
                      {
                        model: product_category,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      // const dataUser = await this.sequelize.query('SELECT * FROM selectUserCustomer')

      let success = {
        message: 'success',
        result: dataUser,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      // const dataUser = await users.findOne({
      //   include:[{
      //     model: customer
      //   }],
      //   where:{id:id}
      // })

      const dataUser = await users.findOne({
        where: { id: id },
        include: [
          {
            model: customer,
          },
          {
            model: orders,
            include: [
              {
                model: order_detail,
                include: [
                  {
                    model: product,
                    include: [
                      {
                        model: product_category,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });

      // const dataUser = await this.sequelize.query(`SELECT * FROM selectUserCustomer WHERE id = ${id}`)

      let success = {
        message: 'success',
        result: dataUser,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const dataUser = await users.findByPk(id);
      if (!dataUser) throw new Error('User tidak ditemukan!');

      let password: any = dataUser.password;
      let salt: any = await bcrypt.genSalt(10);
      let passHash = await bcrypt.hash(updateUserDto.password, salt);

      if (updateUserDto.password) {
        password = passHash;
      }

      const updateUsers = await users.update(
        {
          username: updateUserDto.username,
          password: password,
        },
        {
          where: { id: id },
          returning: true,
        },
      );

      let success = {
        message: 'success',
        result: updateUsers,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      const check = await users.findByPk(id);
      if (!check) throw new Error('User tidak ditemukan');

      await customer.destroy({
        where: { user_id: id },
      });

      await users.destroy({
        where: { id: id },
      });

      return `Hapus data user & customer berhasil id : ${id}`;
    } catch (error) {
      return error.message;
    }
  }
}
