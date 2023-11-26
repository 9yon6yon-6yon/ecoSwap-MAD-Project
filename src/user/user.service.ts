import { Injectable } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    private readonly email: string = "abc@gmail.com";
    private readonly password: string = 'password1234';

    userAuth(userCredential: UserCredDTO): boolean{
        if(userCredential.email === this.email && userCredential.password=== this.password){
            return true;
        }
        return false;
    }
}
