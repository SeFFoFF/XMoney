import { Injectable } from '@nestjs/common';
import { CreatedUserDto } from './dto/CreateUserDto';
import { User } from './schema/user.schema';
import { UserRepository } from './user.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createdUserDto: CreatedUserDto): Promise<User> {
    const user = {
      userId: uuidv4(),
      name: createdUserDto.name,
      email: createdUserDto.email,
      password: createdUserDto.password,
    };
    return this.userRepository.create(user);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }
}
