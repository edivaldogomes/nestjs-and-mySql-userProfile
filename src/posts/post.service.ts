import { HttpStatus, Injectable } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersService } from "src/users/users.service";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from './posts.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private postsRepository:  Repository<Post>,
        private usersService: UsersService
    ){}

    // title, content, authorId
    async createPost(post: CreatePostDto) {
        const userFound = await this.usersService.getUser(post.authorId);

        if(!userFound){
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        const newPost = this.postsRepository.create(post);

        return this.postsRepository.save(newPost);
    }

    getPosts() {
       return this.postsRepository.find();
    }


}