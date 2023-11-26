import { ApiProperty } from "@nestjs/swagger";

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