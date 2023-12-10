import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CreateCartDto {
    @ApiProperty({
        description: "ID of the user associated with the listing (mandatory)",
        type: Number,
        example: 1,
    })
    readonly user_id: number;

    @ApiProperty({
        description: "ID of the listing associated with the cart (mandatory)",
        type: Number,
        example: 1,
    })
    readonly listing_id: number;

}

export class DeleteCartDto {
    @ApiProperty({
        description: 'ID of the Cart to be deleted',
        type: Number,
        example: 1,
    })
    @IsNumber()
    cart_id: number;
}


export class ReadCartDto {
    @ApiProperty({
        description: 'Filter Carts by user ID',
        type: Number,
        example: 1,
    })
    @IsOptional()
    @IsNumber()
    user_id?: number;

    @ApiProperty({
        description: 'Filter Carts by listing ID',
        type: Number,
        example: 1,
    })
    @IsOptional()
    @IsNumber()
    listing_id?: number;
}