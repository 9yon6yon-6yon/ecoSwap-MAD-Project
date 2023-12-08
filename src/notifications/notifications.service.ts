import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationDto, UpdateNotificationDto, ReadNotificationDto } from './dto/notifications.dto';
import { Notification } from 'src/models/notifications.model';


@Injectable()
export class NotificationsService {
    constructor(
        @InjectRepository(Notification)
        private readonly notificationRepository: Repository<Notification>,
    ) { }

    async createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification> {
        const notification = this.notificationRepository.create(createNotificationDto);
        return await this.notificationRepository.save(notification);
    }

    async getNotifications(readNotificationDto: ReadNotificationDto): Promise<Notification[]> {
        return await this.notificationRepository.find({
            where: readNotificationDto,
        });
    }

    async updateNotification(notificationId: number, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
        const existingNotification = await this.notificationRepository.findOne({ where: { notification_id: notificationId } });

        if (!existingNotification) {
            throw new NotFoundException('Notification not found');
        }

        const updatedNotification = Object.assign(existingNotification, updateNotificationDto);
        return await this.notificationRepository.save(updatedNotification);
    }

    async deleteNotification(notificationId: number): Promise<void> {
        const result = await this.notificationRepository.delete(notificationId);

        if (result.affected === 0) {
            throw new NotFoundException('Notification not found');
        }
    }
}