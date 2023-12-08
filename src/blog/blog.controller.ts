import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDTO } from './dto/blog.dto';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @Get('show')
    async getAllBlogs() {
        return this.blogService.getAllBlogs();
    }
    @Get('show/:blogid')
    async getBlogById(@Param('blogid') blogid:string) {
        return this.blogService.getBlogById(+blogid);
    }
    @Post()
    async createBlogPost(@Body() createblogDTO: CreateBlogDTO) { 
        return this.blogService.createBlogPost(createblogDTO);
    }
}
