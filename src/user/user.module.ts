import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { OktaSdkConfig } from 'config/okta.sdk.config';
import { Okta } from './okta.setup';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, Okta, OktaSdkConfig],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
