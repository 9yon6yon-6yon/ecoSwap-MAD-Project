import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateNotificationDto {
    @ApiProperty({
        description: 'ID of the user associated with the notification',
        type: Number,
        example: 1,
    })
    @IsNumber()
    readonly user_id: number;

    @ApiProperty({
        description: 'Notification text content',
        type: String,
        example: 'New message received!',
    })
    @IsString()
    @IsOptional()
    readonly notification_text?: string;

    @ApiProperty({
        description: 'Status of whether the notification is read',
        type: Boolean,
        example: false,
    })
    @IsBoolean()
    @IsOptional()
    readonly is_read?: boolean;
}

export class UpdateNotificationDto {
    @ApiProperty({
        description: 'Updated notification text content',
        type: String,
        example: 'New message received! Check it out.',
    })
    @IsString()
    @IsOptional()
    readonly notification_text?: string;

    @ApiProperty({
        description: 'Updated status of whether the notification is read',
        type: Boolean,
        example: true,
    })
    @IsBoolean()
    @IsOptional()
    readonly is_read?: boolean;
}

export class ReadNotificationDto {
    @ApiProperty({
        description: 'Filter notifications by user ID',
        type: Number,
        example: 1,
    })
    @IsOptional()
    @IsNumber()
    readonly user_id?: number;
}