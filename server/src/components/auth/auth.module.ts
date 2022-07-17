import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from '../db/database.module';
import { UserModule } from '../user/user.module';
import { userProviders } from '../user/user.providers';
import { AuthContoller } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AuthContoller],
  providers: [AuthService, AuthRepository, ...userProviders],
})
export class AuthModule {}
