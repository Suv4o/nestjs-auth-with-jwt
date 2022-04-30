// import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
// import { AuthCredentialsDto } from './dto/auth-credentials.dto';
// import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // constructor(private readonly authService: AuthService) {}

  @Post('login')
  // async login(@Body() authenticateRequest: AuthCredentialsDto) {
  async login() {
    return 'hello';
    // try {
    //   return await this.authService.authenticateUser(authenticateRequest);
    // } catch (e) {
    //   throw new BadRequestException(e.message);
    // }
  }
}
