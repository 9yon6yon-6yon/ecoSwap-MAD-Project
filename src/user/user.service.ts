import { Injectable } from '@nestjs/common';
import { CreateUserDTO, UserCredDTO } from './dto/user.dto';
import { Users } from 'src/models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    private readonly email: string = "abc@gmail.com";
    private readonly password: string = 'password1234';
    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>,
    ) { }
    userAuth(userCredential: UserCredDTO): boolean {
        if (userCredential.email === this.email && userCredential.password === this.password) {
            return true;
        }
        return false;
    }
    async createUser(user: Users) {
        const result = this.userRepository.insert(user);
        return result;
    }
}
