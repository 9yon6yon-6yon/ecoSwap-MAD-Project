import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO, UserCredDTO } from './dto/user.dto';
import { Users } from 'src/models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
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

    async createUser(createUserDTO: CreateUserDTO): Promise<Users> {
        const { name, email, password } = createUserDTO;

        const newUser = new Users(name, email, password);
        await newUser.hashPassword();

        try {

            const result = await this.userRepository.insert(newUser);
            return newUser;
        } catch (error) {
            throw new BadRequestException('User with this email already exists.');
        }
    }
    async getUserByEmail(email: string): Promise<Users> {
        const user = await this.userRepository.findOne({ where: { email } });

        if (!user) {
            throw new NotFoundException(`User with email : ${email} was not found`);
        }
        return user;
    }
    async getUserByID(id: number): Promise<Users> {
        const user = await this.userRepository.findOne({ where: { id: id } });

        if (!user) {
            throw new NotFoundException(`User with id : ${id} was not found`);
        }

        return user;
    }

  async userLogin(userCredDTO: UserCredDTO): Promise<boolean> {
    const { email, password } = userCredDTO;
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return true;
  }
}
