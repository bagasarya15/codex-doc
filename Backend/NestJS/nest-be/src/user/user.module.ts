import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { users } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([users])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
