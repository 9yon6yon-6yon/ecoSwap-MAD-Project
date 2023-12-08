import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateRequestDto {
    @ApiProperty({
        description: 'ID of the user associated with the request',
        type: Number,
        example: 1,
    })
    @IsNumber()
    readonly user_id: number;

    @ApiProperty({
        description: 'ID of the listing associated with the request',
        type: Number,
        example: 2,
    })
    @IsNumber()
    readonly listing_id: number;

    @ApiProperty({
        description: 'Name of the requested item',
        type: String,
        example: 'Item-123',
    })
    @IsString()
    readonly requested_item_name: string;

    @ApiProperty({
        description: 'Description of the requested item',
        type: String,
        example: 'Description of the requested item',
    })
    @IsString()
    @IsOptional()
    readonly RequestedItemDescription?: string;

    @ApiProperty({
        description: 'Photo of the requested item',
        type: String,
        example: 'item_photo.jpg',
    })
    @IsString()
    @IsOptional()
    readonly RequestedItemPhoto?: string;
}


export class UpdateRequestDto {
    @ApiProperty({
        description: 'Updated description of the requested item',
        type: String,
        example: 'Updated description of the requested item',
    })
    @IsString()
    @IsOptional()
    readonly RequestedItemDescription?: string;

    @ApiProperty({
        description: 'Updated photo of the requested item',
        type: String,
        example: 'updated_item_photo.jpg',
    })
    @IsString()
    @IsOptional()
    readonly RequestedItemPhoto?: string;

    @ApiProperty({
        description: 'Updated status of the request',
        type: String,
        example: 'Accepted',
    })
    @IsString()
    @IsOptional()
    readonly RequestStatus?: string;
}

export class ReadRequestDto {
    @ApiProperty({
        description: 'Filter requests by user ID',
        type: Number,
        example: 1,
    })
    @IsOptional()
    @IsNumber()
    readonly user_id?: number;

    @ApiProperty({
        description: 'Filter requests by listing ID',
        type: Number,
        example: 2,
    })
    @IsOptional()
    @IsNumber()
    readonly listing_id?: number;

    @ApiProperty({
        description: 'Filter requests by status',
        type: String,
        example: 'Accepted',
    })
    @IsOptional()
    @IsString()
    readonly RequestStatus?: string;
}
export class DeleteRequestDto {
    @ApiProperty({
        description: 'ID of the request to be deleted',
        type: Number,
        example: 1,
    })
    @IsNumber()
    readonly requestId: number;
}