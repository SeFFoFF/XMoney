import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser() {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }
}
