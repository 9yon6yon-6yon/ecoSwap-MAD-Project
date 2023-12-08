import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FeedbacksService } from './feedbacks.service';
import { Feedback } from 'src/models/feedback.model';
import { CreateFeedbackDto, ReadFeedbackDto, UpdateFeedbackDto } from './dto/feedbacks.dto';


@ApiTags('Feedback API')
@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbackService: FeedbacksService) {}

  @ApiOperation({ summary: 'Create a new feedback' })
  @ApiResponse({ status: 201, description: 'The feedback has been successfully created', type: Feedback })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @Post()
  createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }

  @ApiOperation({ summary: 'Get all feedbacks or filter by criteria' })
  @ApiResponse({ status: 200, description: 'Return a list of feedbacks', type: Feedback, isArray: true })
  @Get()
  getFeedbacks(@Query() readFeedbackDto: ReadFeedbackDto): Promise<Feedback[]> {
    return this.feedbackService.getFeedbacks(readFeedbackDto);
  }

  @ApiOperation({ summary: 'Get a feedback by ID' })
  @ApiResponse({ status: 200, description: 'Return the feedback with the specified ID', type: Feedback })
  @ApiResponse({ status: 404, description: 'Feedback not found' })
  @Get(':feedbackId')
  getFeedbackById(@Param('feedbackId') feedbackId: number): Promise<Feedback> {
    return this.feedbackService.getFeedbackById(feedbackId);
  }

  @ApiOperation({ summary: 'Update a feedback by ID' })
  @ApiResponse({ status: 200, description: 'The feedback has been successfully updated', type: Feedback })
  @ApiResponse({ status: 404, description: 'Feedback not found' })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @Put(':feedbackId')
  updateFeedback(@Param('feedbackId') feedbackId: number, @Body() updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.updateFeedback(feedbackId, updateFeedbackDto);
  }

  @ApiOperation({ summary: 'Delete a feedback by ID' })
  @ApiResponse({ status: 200, description: 'The feedback has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Feedback not found' })
  @Delete(':feedbackId')
  deleteFeedback(@Param('feedbackId') feedbackId: number): Promise<void> {
    return this.feedbackService.deleteFeedback(feedbackId);
  }
}