import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateAuthDto } from './dto/create-auth.dto';
import { users } from 'models';
import * as bcrypt from 'bcrypt' 
import * as jwt from 'jsonwebtoken' 

@Injectable()
export class AuthService {
    async login(createAuthDto: CreateAuthDto) {
        try {
            const dataUser = await users.findOne({
            where: {
                username: createAuthDto.username
            }
            })
            if(!dataUser) throw new Error("Username tidak ditemukan")

            const matchPassword = await bcrypt.compare(createAuthDto.password, dataUser.password)

            if(!matchPassword) throw new Error("Password salah")

            const token = jwt.sign({username: dataUser.username}, process.env.SECRET_KEY ,{
                expiresIn: '10m'
            })

            let succes = {
                message : "Login succes",
                status  : 202,
                token   : token
            }
        
            return succes
        } catch (error) {
            return error.message
        }
    }
}

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext){
        const req = context.switchToHttp().getRequest();
        const token = req.headers.authorization
        if(!token) throw new ForbiddenException('Access Denied')

        try {
            jwt.verify(token, process.env.SECRET_KEY)
            return true;

        } catch (error) {
            throw new ForbiddenException('Invalid Token')
        }
    }
}