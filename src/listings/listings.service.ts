import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from 'src/models/listing.model';
import { Repository } from 'typeorm';
import { CreateListingDto, ReadListingDto, UpdateListingDto } from './dto/listings.dto';


@Injectable()
export class ListingsService {
    constructor(
        @InjectRepository(Listing)
        private readonly listingRepository: Repository<Listing>,
    ) { }

    async createListing(createListingDto: CreateListingDto): Promise<Listing> {
        const newListing = this.listingRepository.create(createListingDto);
        return this.listingRepository.save(newListing);
    }

    async getListings(readListingDto: ReadListingDto): Promise<Listing[]> {
        return this.listingRepository.find({
            where: readListingDto,
        });
    }
    async getAllListings(): Promise<Listing[]> {
        return this.listingRepository.find();
    }
    async getListingById(id: number): Promise<Listing> {
        const listing = await this.listingRepository.findOne({ where: { listingid: id } });
        if (!listing) {
            throw new NotFoundException('Listing not found');
        }
        return listing;
    }
    async updateListing(id: number, updateListingDto: UpdateListingDto): Promise<Listing> {
        await this.getListingById(id);
        await this.listingRepository.update(id, updateListingDto);
        return this.getListingById(id);
    }

    async deleteListing(id: number): Promise<void> {
        await this.getListingById(id);
        await this.listingRepository.delete(id);
    }
}
