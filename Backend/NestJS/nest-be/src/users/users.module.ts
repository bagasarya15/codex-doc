import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { customer, users } from 'models';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [SequelizeModule.forFeature([users, customer])],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
