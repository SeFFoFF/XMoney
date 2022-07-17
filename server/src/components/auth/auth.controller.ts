import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../user/schema/user.schema';
import { AuthService } from './auth.service';
import { CreatedUserDto } from './dto/CreatedUserDto';
import { LoginDto } from './dto/LoginDto';

@Controller('auth')
export class AuthContoller {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto);
  }

  @Post('/signup')
  singUp(@Body() createdUser: CreatedUserDto): Promise<User> {
    return this.authService.signUp(createdUser);
  }
}
