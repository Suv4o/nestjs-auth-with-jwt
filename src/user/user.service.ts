import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Okta } from './okta.setup';

@Injectable()
export class UserService {
  constructor(private readonly okta: Okta) {}

  async createUser(userRequest: UserDto) {
    const { email, password, firstName, lastName, permissions } = userRequest;
    const okta = this.okta.setup();

    const newUser = {
      profile: {
        email: email,
        login: email,
        firstName: firstName,
        lastName: lastName,
        permissions: permissions,
      },
      credentials: {
        password: {
          value: password,
        },
      },
    };

    try {
      const user = await okta.createUser(newUser);
      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
