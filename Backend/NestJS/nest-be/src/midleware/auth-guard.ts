import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const token = req.headers.authorization;

    if (!token) {
      res.send('Access Denied!');
    }

    try {
      const dataJWT = jwt.verify(token, process.env.SECRET_KEY);
      console.log(dataJWT);
      if (dataJWT.role_id !== 1) {
        res.send('Akses hanya bisa dioperasikan oleh admin');
      }

      return true;
    } catch (error) {
      if(error instanceof jwt.JsonWebTokenError){
        res.json({message: 'Invalid Token'})
      }
    }
  }
}
