import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateSubscriptionDto, ReadSubscriptionDto, UpdateSubscriptionDto } from './dto/subscriptions.dto';
import { Subscription } from 'src/models/subscription.model';


@ApiTags('Subscription API')
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionService: SubscriptionsService) {}

  @ApiOperation({ summary: 'Create a new subscription' })
  @ApiResponse({ status: 201, description: 'The subscription has been successfully created', type: Subscription })
  @Post()
  createSubscription(@Body() createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    return this.subscriptionService.createSubscription(createSubscriptionDto);
  }

  @ApiOperation({ summary: 'Get all subscriptions or filter by criteria' })
  @ApiResponse({ status: 200, description: 'Return a list of subscriptions', type: Subscription, isArray: true })
  @Get()
  getSubscriptions(@Query() readSubscriptionDto: ReadSubscriptionDto): Promise<Subscription[]> {
    return this.subscriptionService.getSubscriptions(readSubscriptionDto);
  }

  @ApiOperation({ summary: 'Get a subscription by ID' })
  @ApiResponse({ status: 200, description: 'Return the subscription with the specified ID', type: Subscription })
  @ApiResponse({ status: 404, description: 'Subscription not found' })
  @Get(':subscription_id')
  getSubscriptionById(@Param('subscription_id') subscriptionId: number): Promise<Subscription> {
    return this.subscriptionService.getSubscriptionById(subscriptionId);
  }

  @ApiOperation({ summary: 'Update a subscription by ID' })
  @ApiResponse({ status: 200, description: 'The subscription has been successfully updated', type: Subscription })
  @ApiResponse({ status: 404, description: 'Subscription not found' })
  @Put(':subscription_id')
  updateSubscription(
    @Param('subscription_id') subscriptionId: number,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ): Promise<Subscription> {
    return this.subscriptionService.updateSubscription(subscriptionId, updateSubscriptionDto);
  }

  @ApiOperation({ summary: 'Delete a subscription by ID' })
  @ApiResponse({ status: 200, description: 'The subscription has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Subscription not found' })
  @Delete(':subscription_id')
  deleteSubscription(@Param('subscription_id') subscriptionId: number): Promise<void> {
    return this.subscriptionService.deleteSubscription(subscriptionId);
  }
}