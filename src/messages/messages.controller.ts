import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Message } from 'src/models/message.model';
import { CreateMessageDto, ReadMessageDto, UpdateMessageDto } from './dto/messages.dto';
import { MessagesService } from './messages.service';


@ApiTags('Message API')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @ApiOperation({ summary: 'Create a new message' })
  @ApiResponse({ status: 201, description: 'The message has been successfully created', type: Message })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageService.createMessage(createMessageDto);
  }

  @ApiOperation({ summary: 'Get all messages or filter by criteria' })
  @ApiResponse({ status: 200, description: 'Return a list of messages', type: Message, isArray: true })
  @Get()
  getMessages(@Body() readMessageDto: ReadMessageDto): Promise<Message[]> {
    return this.messageService.getMessages(readMessageDto);
  }

  @ApiOperation({ summary: 'Get a message by ID' })
  @ApiResponse({ status: 200, description: 'Return the message with the specified ID', type: Message })
  @ApiResponse({ status: 404, description: 'Message not found' })
  @ApiParam({ name: 'messageId', description: 'ID of the message', type: Number })
  @Get(':messageId')
  getMessageById(@Param('messageId') messageId: number): Promise<Message> {
    return this.messageService.getMessageById(messageId);
  }

  @ApiOperation({ summary: 'Update a message by ID' })
  @ApiResponse({ status: 200, description: 'The message has been successfully updated', type: Message })
  @ApiResponse({ status: 404, description: 'Message not found' })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @ApiParam({ name: 'messageId', description: 'ID of the message', type: Number })
  @Put(':messageId')
  updateMessage(@Param('messageId') messageId: number, @Body() updateMessageDto: UpdateMessageDto): Promise<Message> {
    return this.messageService.updateMessage(messageId, updateMessageDto);
  }

  @ApiOperation({ summary: 'Delete a message by ID' })
  @ApiResponse({ status: 200, description: 'The message has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Message not found' })
  @ApiParam({ name: 'messageId', description: 'ID of the message', type: Number })
  @Delete(':messageId')
  deleteMessage(@Param('messageId') messageId: number): Promise<void> {
    return this.messageService.deleteMessage(messageId);
  }

  @ApiOperation({ summary: 'Get conversation messages based on sender_id, receiver_id, and listing_ref_id' })
  @ApiResponse({ status: 200, description: 'Return a list of conversation messages', type: Message, isArray: true })
  @ApiQuery({ name: 'senderId', description: 'ID of the sender', type: Number })
  @ApiQuery({ name: 'receiverId', description: 'ID of the receiver', type: Number })
  @ApiQuery({ name: 'listingRefId', description: 'ID of the listing reference', type: Number })
  @Get('conversation')
  getConversationMessages(
    @Query('senderId') senderId: number,
    @Query('receiverId') receiverId: number,
    @Query('listingRefId') listingRefId: number,
  ): Promise<Message[]> {
    return this.messageService.getConversationMessages(senderId, receiverId, listingRefId);
  }
}
