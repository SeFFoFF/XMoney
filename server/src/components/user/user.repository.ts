import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class UserRepository {
  //@InjectModel(User.name) private userModel: Model<UserDocument>
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) {}

  async findOne(filterQueary: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(filterQueary);
  }

  async find(filterQueary: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(filterQueary);
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
