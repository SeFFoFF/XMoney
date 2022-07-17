import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '../db/database.module';
import { User, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, ...userProviders],
})
export class UserModule {}
