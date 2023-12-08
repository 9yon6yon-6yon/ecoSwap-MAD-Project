import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { CreateListingDto, ReadListingDto, UpdateListingDto } from './dto/listings.dto';
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Listing } from 'src/models/listing.model';

@ApiTags('listings')
@Controller('listings')
export class ListingsController {
    constructor(private readonly listingsService: ListingsService) {}

    @ApiOperation({ summary: 'Create a new listing' })
    @ApiResponse({ status: 201, description: 'The listing has been successfully created', type: Listing })
    @ApiBadRequestResponse({ description: 'Invalid input data' })
    @Post()
    createListing(@Body() createListingDto: CreateListingDto): Promise<Listing> {
      return this.listingsService.createListing(createListingDto);
    }
  
    @ApiOperation({ summary: 'Get all listings or filter by criteria' })
    @ApiResponse({ status: 200, description: 'Return a list of listings', type: Listing, isArray: true })
    @Get()
    getListings(@Query() readListingDto: ReadListingDto): Promise<Listing[]> {
      return this.listingsService.getListings(readListingDto);
    }
    @Get('all')
    getAllListings(){
      return this.listingsService.getAllListings();
    }
  
  
    @ApiOperation({ summary: 'Get a listing by ID' })
    @ApiResponse({ status: 200, description: 'Return the listing with the specified ID', type: Listing })
    @ApiResponse({ status: 404, description: 'Listing not found' })
    @Get(':listingid')
    getListingById(@Param('listingid') listingid: number): Promise<Listing> {
      return this.listingsService.getListingById(listingid);
    }
  
    @ApiOperation({ summary: 'Update a listing by ID' })
    @ApiResponse({ status: 200, description: 'The listing has been successfully updated', type: Listing })
    @ApiResponse({ status: 404, description: 'Listing not found' })
    @ApiBadRequestResponse({ description: 'Invalid input data' })
    @Put(':listingid')
    updateListing(@Param('listingid') listingid: number, @Body() updateListingDto: UpdateListingDto): Promise<Listing> {
      return this.listingsService.updateListing(listingid, updateListingDto);
    }
  
    @ApiOperation({ summary: 'Delete a listing by ID' })
    @ApiResponse({ status: 200, description: 'The listing has been successfully deleted' })
    @ApiResponse({ status: 404, description: 'Listing not found' })
    @Delete(':listingid')
    deleteListing(@Param('listingid') listingid: number): Promise<void> {
      return this.listingsService.deleteListing(listingid);
    }
}
