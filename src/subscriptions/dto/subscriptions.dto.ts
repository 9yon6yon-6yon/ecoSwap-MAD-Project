import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsEnum, IsDate, IsOptional } from "class-validator";

export class CreateSubscriptionDto {
    @ApiProperty({
        description: 'ID of the user associated with the subscription',
        type: Number,
        example: 1,
    })
    @IsNumber()
    readonly user_id: number;
    @ApiProperty({
        description: 'Type of the subscription (Premium or Free)',
        enum: ['Premium', 'Free'],
        type: String,
        example: 'Premium',
    })
    @IsEnum(['Premium', 'Free'])
    readonly type: string;
} export class UpdateSubscriptionDto {
    @ApiProperty({
        description: 'ID of the user associated with the subscription',
        type: Number,
        example: 1,
    })
    @IsNumber()
    readonly user_id: number;
    @ApiProperty({
        description: 'Updated type of the subscription (Premium or Free)',
        enum: ['Premium', 'Free'],
        type: String,
        example: 'Free',
    })
    @IsOptional()
    @IsEnum(['Premium', 'Free'])
    readonly type?: string;

    @ApiProperty({
        description: 'Updated end date of the subscription',
        type: Date,
        example: '2023-12-31T23:59:59Z',
    })
    @IsOptional()
    @IsDate()
    readonly end_date?: Date;
} export class ReadSubscriptionDto {
    @ApiProperty({
        description: 'Filter subscriptions by user ID',
        type: Number,
        example: 1,
    })
    @IsNumber()
    readonly user_id?: number;
}

export class DeleteSubscriptionDto {
    @ApiProperty({
        description: 'ID of the subscription to be deleted',
        type: Number,
        example: 1,
    })
    @IsNumber()
    readonly subscription_id: number;
}
