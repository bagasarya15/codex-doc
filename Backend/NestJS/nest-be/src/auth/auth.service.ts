import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { users } from 'models';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async login(createAuthDto: CreateAuthDto) {
    try {
      const dataUser = await users.findOne({
        where: {
          username: createAuthDto.username,
        },
      });
      if (!dataUser) throw new Error('Username tidak ditemukan');

      const matchPassword = await bcrypt.compare(
        createAuthDto.password,
        dataUser.password,
      );

      if (!matchPassword) throw new Error('Password salah');

      const token = jwt.sign(
        { username: dataUser.username, role_id: dataUser.role_id },
        process.env.SECRET_KEY,
        {
          expiresIn: '10m',
        },
      );

      let succes = {
        message: 'Login succes',
        status: 202,
        token: token,
      };

      return succes;
    } catch (error) {
      return error.message;
    }
  }
}
