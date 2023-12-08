import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from 'src/models/feedback.model';
import { Repository } from 'typeorm';
import { CreateFeedbackDto, ReadFeedbackDto, UpdateFeedbackDto } from './dto/feedbacks.dto';


@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
  ) {}

  async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const feedback = this.feedbackRepository.create(createFeedbackDto);
    return this.feedbackRepository.save(feedback);
  }

  async getFeedbacks(readFeedbackDto: ReadFeedbackDto): Promise<Feedback[]> {
    return this.feedbackRepository.find({ where: readFeedbackDto });
  }
  async getAllFeedbacks() {
    return this.feedbackRepository.find();
  }

  async getFeedbackById(feedbackId: number): Promise<Feedback> {
    const feedback = await this.feedbackRepository.findOne({ where: { feedback_id: feedbackId } });
    if (!feedback) {
      throw new NotFoundException('Feedback not found');
    }
    return feedback;
  }

  async updateFeedback(feedbackId: number, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    await this.getFeedbackById(feedbackId);
    await this.feedbackRepository.update(feedbackId, updateFeedbackDto);
    return this.getFeedbackById(feedbackId);
  }

  async deleteFeedback(feedbackId: number): Promise<void> {
    const feedback = await this.getFeedbackById(feedbackId); 
    await this.feedbackRepository.remove(feedback);
  }
}