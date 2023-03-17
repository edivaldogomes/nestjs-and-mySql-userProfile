import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller('posts')
export class PostsController {

    constructor(
        private postService: PostService
    ) {}

    @Post()
    createPost(@Body() post: CreatePostDto) {
       return this.postService.createPost(post)
    }

    @Get()
    getPosts() {
        return this.postService.getPosts()

    }
}