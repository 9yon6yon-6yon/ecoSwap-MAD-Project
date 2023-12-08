import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/models/message.model';
import { Repository } from 'typeorm';
import { CreateMessageDto, ReadMessageDto, UpdateMessageDto } from './dto/messages.dto';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) { }

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
        const message = this.messageRepository.create(createMessageDto);
        return this.messageRepository.save(message);
    }

    async getMessages(readMessageDto: ReadMessageDto): Promise<Message[]> {
        return this.messageRepository.find({
            where: readMessageDto,
            order: { created_at: 'DESC' },
        });
    }

    async getMessageById(messageId: number): Promise<Message> {
        const message = await this.messageRepository.findOne({ where: { message_id: messageId } });
        if (!message) {
            throw new NotFoundException('Message not found');
        }
        return message;
    }

    async updateMessage(messageId: number, updateMessageDto: UpdateMessageDto): Promise<Message> {
        await this.getMessageById(messageId);
        await this.messageRepository.update(messageId, updateMessageDto);
        return this.getMessageById(messageId);
    }

    async deleteMessage(messageId: number): Promise<void> {
        await this.getMessageById(messageId); 
        await this.messageRepository.delete(messageId);
    }
    async getConversationMessages(userId1: number, userId2: number, listingRefId: number): Promise<Message[]> {
        const messages = await this.messageRepository.find({
          where: [
            { sender_id: userId1, receiver_id: userId2, listing_ref_id: listingRefId },
            { sender_id: userId2, receiver_id: userId1, listing_ref_id: listingRefId },
          ],
          order: { created_at: 'DESC' },
        });
      
        if (!messages.length) {
          throw new NotFoundException('Conversation messages not found');
        }
        return messages;
      }
}