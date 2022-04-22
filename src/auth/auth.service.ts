import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from '../user/user.entity';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userService.createUser(authCredentialsDto);
  }
}
