import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequestDto, ReadRequestDto, UpdateRequestDto } from './dto/requests.dto';
import { Request } from 'src/models/request.model';


@Injectable()
export class RequestsService {
    constructor(
        @InjectRepository(Request)
        private readonly requestRepository: Repository<Request>,
    ) {}
    async createRequest(createRequestDto: CreateRequestDto): Promise<Request> {

        const notification = this.requestRepository.create(createRequestDto);
        return await this.requestRepository.save(notification);
    }
    async getRequests(readRequestDto: ReadRequestDto): Promise<Request[]> {
        return await this.requestRepository.find({
            where: readRequestDto,
        });
    }
    async getRequestById(requestId: number): Promise<Request> {
        const request = await this.requestRepository.findOne({ where: { request_id: requestId } });

        if (!request) {
            throw new NotFoundException('Request not found');
        }
        return request;
    }
    async updateRequest(requestId: number, updateRequestDto: UpdateRequestDto): Promise<Request> {
        const request = await this.requestRepository.findOne({ where: { request_id: requestId } });
        if (!request) {
            throw new NotFoundException('Request not found');
        }
        await this.requestRepository.save(request);
        const updatedRequest = Object.assign(request, updateRequestDto);
        return await this.requestRepository.save(updatedRequest);
    }
    async deleteRequest(requestId: number): Promise<void> {
        const result = await this.requestRepository.delete(requestId);
        if (result.affected === 0) {
            throw new NotFoundException('Request not found');
        }
    }
}