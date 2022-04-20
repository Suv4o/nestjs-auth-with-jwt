import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userService.createUser(authCredentialsDto);
  }
}
