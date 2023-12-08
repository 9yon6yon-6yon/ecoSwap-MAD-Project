import { Module } from '@nestjs/common';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from 'src/models/request.model';

@Module({
  imports:[TypeOrmModule.forFeature([Request])],
  controllers: [RequestsController],
  providers: [RequestsService]
})
export class RequestsModule {}