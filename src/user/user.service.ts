import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }
}
