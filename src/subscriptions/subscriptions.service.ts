import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriptionDto, ReadSubscriptionDto, UpdateSubscriptionDto } from './dto/subscriptions.dto';
import { Subscription } from 'src/models/subscription.model';


@Injectable()
export class SubscriptionsService {
    constructor(
        @InjectRepository(Subscription)
        private readonly subscriptionRepository: Repository<Subscription>,
    ) { }

    async createSubscription(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
        const subscription = this.subscriptionRepository.create(createSubscriptionDto);
        return await this.subscriptionRepository.save(subscription);
    }

    async getSubscriptions(readSubscriptionDto: ReadSubscriptionDto): Promise<Subscription[]> {
        return this.subscriptionRepository.find({ where: readSubscriptionDto });
    }

    async getSubscriptionById(subscriptionId: number): Promise<Subscription> {
        const subscription = await this.subscriptionRepository.findOne({ where: { subscription_id: subscriptionId } });
        if (!subscription) {
            throw new NotFoundException('Subscription not found');
        }
        return subscription;
    }

    async updateSubscription(subscriptionId: number, updateSubscriptionDto: UpdateSubscriptionDto): Promise<Subscription> {
        const subscription = await this.getSubscriptionById(subscriptionId);
        Object.assign(subscription, updateSubscriptionDto);
        return await this.subscriptionRepository.save(subscription);
    }

    async deleteSubscription(subscriptionId: number): Promise<void> {
        const subscription = await this.getSubscriptionById(subscriptionId);
        await this.subscriptionRepository.remove(subscription);
    }
}