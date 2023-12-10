import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Cart } from "src/models/cart.model";
import { Feedback } from "src/models/feedback.model";
import { Listing } from "src/models/listing.model";
import { Message } from "src/models/message.model";
import { Notification } from "src/models/notifications.model";
import { Request } from "src/models/request.model";
import { Subscription } from "src/models/subscription.model";
import { Users } from "src/models/user.model";

export default (configService: ConfigService): TypeOrmModuleOptions => {
    const options: TypeOrmModuleOptions = {
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),//+ is to convert it to a number otherwise string as default
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Users,Listing,Feedback,Request,Message,Subscription,Notification,Cart]

    }
    return options;
}
