import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { typeOrmConfigAsync } from 'config/typeorm.config';
import { AppController } from './app.controller';
import { AuthConfig } from 'config/auth.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UserModule,
  ],
  providers: [AuthConfig],
  controllers: [AppController],
})
export class AppModule {}
