import { UserCredDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(): string;
    userLogin(userCredential: UserCredDTO): any;
}
