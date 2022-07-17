import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthRepository {
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) {}

  async findUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email });
  }

  async signUp(userDto) {
    const { email, password } = userDto;
    const hash = await bcrypt.hash(password, 10);
    return this.userModel.create({
      userId: uuidv4(),
      email: email,
      password: hash,
      name: '',
    });
  }
}
