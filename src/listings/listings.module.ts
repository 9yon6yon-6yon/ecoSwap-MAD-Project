import { Module } from '@nestjs/common';
import { ListingsController } from './listings.controller';
import { ListingsService } from './listings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Listing } from 'src/models/listing.model';

@Module({
  imports:[TypeOrmModule.forFeature([Listing])],
  controllers: [ListingsController],
  providers: [ListingsService]
})
export class ListingsModule {}
