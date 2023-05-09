import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get('all')
    GetAllUsers(): any {
        return this.userService.findAll()
    }

    @Post('create')
    CreateUsers( @Body() dataBody :string ):any {
        return this.userService.CreateUsers(dataBody)
    }

    @Post('create-sp')
    CreateUserCustomer( @Body() dataBody :string):any {
        return this.userService.CreateUserCustomer(dataBody)
    }
    
}
