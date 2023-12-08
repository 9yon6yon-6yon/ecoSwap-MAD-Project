import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class UserCredDTO{
    @ApiProperty({
        name: 'email',
        description: "User's email",
        type: String,
        example: 'dev@gmail.com',
    })
    readonly email: string;
    @ApiProperty({
        name: 'password',
        description: "User's password",
        type: String,
        example: 'password1234',
    })
    readonly password: string;

}
export class CreateUserDTO{
    @ApiProperty({
        name: 'name',
        description: "User's name",
        type: String,
        example: 'dev',
    })
    readonly name: string;
    @IsEmail()
    @ApiProperty({
        name: 'email',
        description: "User's email",
        type: String,
        example: 'dev@gmail.com',
    })
    readonly email: string;
    @ApiProperty({
        name: 'password',
        description: "User's password",
        type: String,
        example: 'password1234',
    })
    readonly password: string;

}