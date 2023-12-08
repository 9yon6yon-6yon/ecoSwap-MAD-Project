import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFeedbackDto {
    @ApiProperty({
        description: "ID of the user associated with the listing (mandatory)",
        type: Number,
        example: 1,
    })
    readonly user_id: number;

    @ApiProperty({
        description: "ID of the listing associated with the feedback (mandatory)",
        type: Number,
        example: 1,
    })
    readonly listing_ref_id: number;

    @ApiProperty({
        description: "Feedback text",
        type: String,
        example: 'Great product!',
    })
    readonly feedback: string;
}

export class DeleteFeedbackDto {
    @ApiProperty({
        description: 'ID of the feedback to be deleted',
        type: Number,
        example: 1,
    })
    @IsNumber()
    feedback_id: number;
}

export class UpdateFeedbackDto {
    @ApiProperty({
        description: 'Updated feedback text',
        type: String,
        example: 'Updated feedback text',
    })
    @IsOptional()
    @IsString()
    feedback?: string;
}
export class ReadFeedbackDto {
    @ApiProperty({
        description: 'Filter feedbacks by user ID',
        type: Number,
        example: 1,
    })
    @IsOptional()
    @IsNumber()
    user_id?: number;

    @ApiProperty({
        description: 'Filter feedbacks by listing ID',
        type: Number,
        example: 1,
    })
    @IsOptional()
    @IsNumber()
    listing_ref_id?: number;
}