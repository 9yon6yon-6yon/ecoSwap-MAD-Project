import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Users } from "src/models/user.model";

export class CreateListingDto {
    @ApiProperty({
        name: 'user_id',
        description: "ID of the user associated with the listing mendatory",
        type: Number,
        example: 1,
    })
    readonly user_id: number;
    @ApiProperty({
        name: 'product_name',
        description: "product name or title",
        type: String,
        example: 'Product-123',
    })
    readonly product_name: string;
    @ApiProperty({
        name: 'description',
        description: "This is the description of the product",
        type: String,
        example: 'Product description like this product has this or that',
    })
    readonly description: string;
  

}
export class DeleteListingDto {
    @ApiProperty({
        description: 'ID of the listing to be deleted',
        type: Number,
        example: 1,
    })
    @IsNumber()
    listingId: number;
}

export class UpdateListingDto {
    @ApiProperty({
        description: 'Updated product name or title',
        type: String,
        example: 'Updated Product-123',
    })
    @IsOptional()
    @IsString()
    product_name?: string;
    @ApiProperty({
        description: 'Updated description of the product',
        type: String,
        example: 'Updated Product description like this product has this or that',
    })
    @IsOptional()
    @IsString()
    description?: string;
    @ApiProperty({
        description: 'Updated photos of the product',
        type: String,
        example: 'updated_photo.jpg',
    })
    @IsOptional()
    @IsString()
    photos?: string;
    @ApiProperty({
        description: 'Updated created date of the product',
        type: Date,
        example: '2023-01-01T00:00:00Z',
    })
    @IsOptional()
    created_at?: Date;
    @ApiProperty({
        description: 'Updated verification status of the product',
        type: String,
        example: 'Updated Verified',
    })
    @IsOptional()
    verification_status?: string;
}
export class ReadListingDto {
    @ApiProperty({
        description: 'Filter listings by user ID',
        type: Number,
        example: 1,
    })
    @IsOptional()
    @IsNumber()
    user_id?: number;

    @ApiProperty({
        description: 'Filter listings by product name',
        type: String,
        example: 'Product-123',
    })
    @IsOptional()
    @IsString()
    product_name?: string;
}