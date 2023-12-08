import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO, UserCredDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
  
    @Get('email/:email')
    async getUserByEmail(@Param('email') email: string) {
        return this.userService.getUserByEmail(email);
    }
    @Get(':id')
    async getUserByID(@Param('id') id: string) {
        return this.userService.getUserByID(+id);
    }
    @Post('login')
    userLogin(@Body() userCredential: UserCredDTO): any {
        return this.userService.userAuth(userCredential);
    }
    @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        return this.userService.createUser(createUserDTO);
    }
}
