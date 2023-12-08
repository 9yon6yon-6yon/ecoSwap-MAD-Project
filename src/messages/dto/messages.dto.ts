import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateMessageDto {
    @ApiProperty({
        description: 'ID of the sender',
        type: Number,
        example: 1,
    })
    @IsNumber()
    readonly sender_id: number;

    @ApiProperty({
        description: 'ID of the receiver',
        type: Number,
        example: 2,
    })
    @IsNumber()
    readonly receiver_id: number;

    @ApiProperty({
        description: 'ID of the listing reference',
        type: Number,
        example: 3,
    })
    @IsNumber()
    readonly listing_ref_id: number;

    @ApiProperty({
        description: 'Text message content',
        type: String,
        example: 'Hello, let\'s trade!',
    })
    @IsString()
    readonly text_msg: string;

    @ApiProperty({
        description: 'Status of the message',
        type: Boolean,
        example: false,
    })
    @IsBoolean()
    @IsOptional()
    readonly status?: boolean;
}
export class UpdateMessageDto {
    @ApiProperty({
        description: 'Updated text message content',
        type: String,
        example: 'Sure, let\'s discuss the details.',
    })
    @IsString()
    @IsOptional()
    readonly text_msg?: string;

    @ApiProperty({
        description: 'Updated status of the message',
        type: Boolean,
        example: true,
    })
    @IsBoolean()
    @IsOptional()
    readonly status?: boolean;
}


export class ReadMessageDto {
    @ApiProperty({
        description: 'Filter messages by sender ID',
        type: Number,
        example: 1,
    })
    @IsOptional()
    @IsNumber()
    readonly sender_id?: number;

    @ApiProperty({
        description: 'Filter messages by receiver ID',
        type: Number,
        example: 2,
    })
    @IsOptional()
    @IsNumber()
    readonly receiver_id?: number;

    @ApiProperty({
        description: 'Filter messages by listing reference ID',
        type: Number,
        example: 3,
    })
    @IsOptional()
    @IsNumber()
    readonly listing_ref_id?: number;
}