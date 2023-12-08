import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingsModule } from './listings/listings.module';
import { MessagesModule } from './messages/messages.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { RequestsModule } from './requests/requests.module';
import { NotificationsModule } from './notifications/notifications.module';
import DatabaseConnection from './database/connection';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRootAsync({
    imports: [ConfigModule, UserModule,ListingsModule,MessagesModule,SubscriptionsModule,FeedbacksModule,RequestsModule,NotificationsModule],
    useFactory: DatabaseConnection,
    inject: [ConfigService],
  }),
    UserModule,
    ListingsModule,
    MessagesModule,
    SubscriptionsModule,
    FeedbacksModule,
    RequestsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
