import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfig {
  public issuer: string = process.env.OKTA_ISSUER;
  public clientId: string = process.env.OKTA_CLIENT_ID;
  public audience: string = process.env.OKTA_AUDIENCE;
}
