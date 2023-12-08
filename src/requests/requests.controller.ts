import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBadRequestResponse, ApiResponse } from '@nestjs/swagger';
import { CreateRequestDto, ReadRequestDto, UpdateRequestDto } from './dto/requests.dto';
import { RequestsService } from './requests.service';
import { Request } from 'src/models/request.model';

@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @ApiOperation({ summary: 'Create a new request' })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @Post()
  createRequest(@Body() createRequestDto: CreateRequestDto): Promise<Request> {
    return this.requestsService.createRequest(createRequestDto);
  }

  @ApiOperation({ summary: 'Get all requests or filter by criteria' })
  @ApiResponse({ status: 200, description: 'Return a list of requests', type: Request, isArray: true })
  @Get()
  getRequests(@Query() readRequestDto: ReadRequestDto): Promise<Request[]> {
    return this.requestsService.getRequests(readRequestDto);
  }

  @ApiOperation({ summary: 'Get a request by ID' })
  @ApiResponse({ status: 200, description: 'Return the request with the specified ID', type: Request })
  @ApiResponse({ status: 404, description: 'Request not found' })
  @Get(':requestId')
  getRequestById(@Param('requestId') requestId: number): Promise<Request> {
    return this.requestsService.getRequestById(requestId);
  }

  @ApiOperation({ summary: 'Update a request by ID' })
  @ApiResponse({ status: 200, description: 'The request has been successfully updated', type: Request })
  @ApiResponse({ status: 404, description: 'Request not found' })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @Put(':requestId')
  updateRequest(
    @Param('requestId') requestId: number,
    @Body() updateRequestDto: UpdateRequestDto,
  ): Promise<Request> {
    return this.requestsService.updateRequest(requestId, updateRequestDto);
  }

  @ApiOperation({ summary: 'Delete a request by ID' })
  @ApiResponse({ status: 200, description: 'The request has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Request not found' })
  @Delete(':requestId')
  deleteRequest(@Param('requestId') requestId: number): Promise<void> {
    return this.requestsService.deleteRequest(requestId);
  }
}
