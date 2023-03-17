import { Controller, Post, Get, Param, ParseIntPipe, Body, Delete, Patch } from '@nestjs/common';
import { CreateProfileDto } from './create-profile.dto';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return this.usersService.getUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return this.usersService.deleteUser(id);
    }

    @Post("/create")
    createUser(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(newUser);
    }


    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
        return this.usersService.updateUser(id, user);
    }
    /* De la conexión 1:1 */
    @Post(':id/profile')
    createProfile(
        @Param('id', ParseIntPipe) id: number, 
        @Body() profile: CreateProfileDto,
    ){
        return this.usersService.createProfile(id, profile)
    }
}

/*
 {
    "firstname": "John",
    "lastname": "Edivaldo"
    "age": 12
 }
*/

