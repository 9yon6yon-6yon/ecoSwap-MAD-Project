import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO, UserCredDTO } from './dto/user.dto';
import { Users } from 'src/models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    private readonly email: string;
    private readonly password: string;
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
    async getUserByEmail(email: string): Promise<Users> {
        const user = await this.userRepository.findOne({ where: { email } });
    
        if (!user) {
            throw new NotFoundException(`User with email : ${email} was not found`);
        }
    
        return user;
    }
}
