import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) return res.send('Access Denied');

    try {
      jwt.verify(token, process.env.SECRET_KEY);
      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        res.send('Invalid token');
      }
      // res.send(error.message)
    }
  }
}
