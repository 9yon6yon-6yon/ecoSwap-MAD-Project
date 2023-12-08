import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { CreateNotificationDto, UpdateNotificationDto, ReadNotificationDto } from './dto/notifications.dto';
import { NotificationsService } from './notifications.service';
import { Notification } from 'src/models/notifications.model';


@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) { }

    @ApiOperation({ summary: 'Create a new notification' })
    @ApiResponse({ status: 201, description: 'The notification has been successfully created', type: Notification })
    @ApiBadRequestResponse({ description: 'Invalid input data' })
    @Post()
    createNotification(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
        return this.notificationsService.createNotification(createNotificationDto);
    }

    @ApiOperation({ summary: 'Get all notifications or filter by criteria' })
    @ApiResponse({ status: 200, description: 'Return a list of notifications', type: Notification, isArray: true })
    @Get()
    getNotifications(@Query() readNotificationDto: ReadNotificationDto): Promise<Notification[]> {
        return this.notificationsService.getNotifications(readNotificationDto);
    }

    @ApiOperation({ summary: 'Update a notification by ID' })
    @ApiResponse({ status: 200, description: 'The notification has been successfully updated', type: Notification })
    @Put(':notificationId')
    updateNotification(
        @Param('notificationId') notificationId: number,
        @Body() updateNotificationDto: UpdateNotificationDto,
    ): Promise<Notification> {
        return this.notificationsService.updateNotification(notificationId, updateNotificationDto);
    }

    @ApiOperation({ summary: 'Delete a notification by ID' })
    @ApiResponse({ status: 200, description: 'The notification has been successfully deleted' })
    @Delete(':notificationId')
    deleteNotification(@Param('notificationId') notificationId: number): Promise<void> {
        return this.notificationsService.deleteNotification(notificationId);
    }
}