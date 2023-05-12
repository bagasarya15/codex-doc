import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user-2')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find-all')
  GetAllUsers(): any {
    return this.userService.findAll();
  }

  @Get('find-by/:id')
  GetById(@Param('id') id: string) {
    return this.userService.GetUsersById(+id);
  }

  @Post('create')
  PostUsers(@Body() dataBody: string): any {
    return this.userService.CreateUsers(dataBody);
  }

  @Post('create-sp')
  PostUsersSp(@Body() dataBody: string): any {
    return this.userService.CreateUserCustomer(dataBody);
  }

  @Delete('delete/:id')
  DeleteSP(@Param('id') id: string) {
    return this.userService.DeleteUserCustomer(+id);
  }
}
