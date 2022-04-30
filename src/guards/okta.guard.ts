import {
  Injectable,
  CanActivate,
  ExecutionContext,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as OktaJwtVerifier from '@okta/jwt-verifier';
import { AuthConfig } from '../../config/auth.config';

@Injectable()
export class OktaGuard implements CanActivate, OnModuleInit {
  constructor(private readonly authConfig: AuthConfig) {}
  oktaJwtVerifier: any;

  onModuleInit() {
    this.oktaJwtVerifier = new OktaJwtVerifier({
      issuer: this.authConfig.issuer,
      clientId: this.authConfig.clientId,
      // assertClaims: {
      //   'groups.includes': ['developer']
      // }
    });
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const token = context.getArgs()[0]?.headers?.authorization.split(' ')[1];
    return this.oktaJwtVerifier
      .verifyAccessToken(token, this.authConfig.audience)
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
        throw new UnauthorizedException();
      });
  }
}
