import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Profile } from './users/profile.entity';
import { Post } from './posts/posts.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    port: 3306,
    database: 'nestjs',
    entities: [User, Profile, Post],/*dentro de cualquier carpeta que tenga el nombre entity  */
    synchronize: true,
    dropSchema:true
  }),
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
