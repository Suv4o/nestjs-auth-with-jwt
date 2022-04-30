import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthConfig } from '../../config/auth.config';

@Module({
  // providers: [AuthService, AuthConfig],
  providers: [AuthConfig],
  controllers: [AuthController],
})
export class AuthModule {}
