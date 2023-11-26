import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get()
    getUser(): string{
        return 'I am an user';
    }
    @Post('login')
    userLogin(@Body() userCredential: UserCredDTO): any{
        return this.userService.userAuth(userCredential);
    }
}
