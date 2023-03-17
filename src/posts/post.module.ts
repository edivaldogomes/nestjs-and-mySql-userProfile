import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Post]), UsersModule,
    ],
    providers: [PostsController],
    controllers: [PostService],
})
export class PostModule {}