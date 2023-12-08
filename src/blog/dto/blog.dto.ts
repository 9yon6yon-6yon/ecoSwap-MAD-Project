import { ApiProperty } from "@nestjs/swagger";
import { Users } from "src/models/user.model";

export class CreateBlogDTO {
    @ApiProperty({
        name: 'post',
        description: "Blog post content",
        type: String,
        example: 'This is a blog post.',
    })
    readonly post: string;
    @ApiProperty({
        name: 'user_id',
        description: "ID of the user associated with the blog",
        type: Number,
        example: 1,
    })
    readonly user_id: number;
    @ApiProperty({
        name: 'status',
        description: "Blog status",
        type: String,
        example: 'Draft lorem ipsum',
    })
    readonly status: string;

    @ApiProperty({
        name: 'user',
        description: "ID of the user associated with the blog",
        type: Users,
        example: 1,
    })
    readonly user: Users;


}