import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/models/blog.model';
import { Repository } from 'typeorm';


@Injectable()
export class BlogService {
    constructor(@InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
    ) {}
    async createBlogPost(post: Blog) {
        const result = this.blogRepository.insert(post);
        return result;
    }
    async getAllBlogs(): Promise<Blog[]> {
        return this.blogRepository.find();
    }
    async getBlogById(id: number): Promise<Blog> {
        const blog = await this.blogRepository.findOne({ where: { blogid: id } });
        if (!blog) {
            throw new NotFoundException(`Blog post with id : ${id} was not found`);
        }
        return blog;
    }
}