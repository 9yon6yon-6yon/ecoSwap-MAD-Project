import { UserCredDTO } from './dto/user.dto';
export declare class UserService {
    private readonly email;
    private readonly password;
    userAuth(userCredential: UserCredDTO): boolean;
}
