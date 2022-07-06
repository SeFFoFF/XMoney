import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get(':userId')
  // async getUser(@Param('userId') userId: string): Promise<User> {
  //     return this.usersService.getUserById(userId);
  // }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  // @Post()
  // async createUser(@Body() createUserDto): Promise<User> {
  //     return this.userService.createUser(createUserDto.email, createUserDto.age)
  // }

  // @Patch(':userId')
  // async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
  //     return this.usersService.updateUser(userId, updateUserDto);
  // }
}
