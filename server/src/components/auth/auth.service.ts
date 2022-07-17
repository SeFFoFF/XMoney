import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/schema/user.schema';
import { AuthRepository } from './auth.repository';
import * as bcrypt from 'bcrypt';
import { CreatedUserDto } from './dto/CreatedUserDto';
import { UserJwtPayload } from './interfaces/UserJwtPayload';
import { LoginDto } from './dto/LoginDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(loginDto: LoginDto) {
    const { password, ...userResponse } =
      await this.authRepository.findUserByEmail(loginDto.email);
    const isValid = await bcrypt.compare(loginDto.password, password);
    if (isValid) {
      const payload: UserJwtPayload = {
        email: userResponse.email,
        sub: userResponse.userId,
      };
      return { access_token: this.jwtService.sign(payload) };
    } else {
      throw new UnauthorizedException('Incorrect login credentials!');
    }
  }

  async signUp(createdUser: CreatedUserDto): Promise<User> {
    return await this.authRepository.signUp(createdUser);
  }
}
