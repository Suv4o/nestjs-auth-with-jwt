import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as OktaJwtVerifier from '@okta/jwt-verifier';
import { AuthConfig } from '../../config/auth.config';
import { Reflector } from '@nestjs/core';

@Injectable()
export class OktaGuard implements CanActivate {
  oktaJwtVerifier: OktaJwtVerifier;

  constructor(
    private reflector: Reflector,
    private readonly authConfig: AuthConfig,
  ) {}

  jwtVerifier(claims) {
    console.log('Guard claims: ', claims);

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
    const claims = this.reflector.get<string[]>('claims', context.getHandler());
    this.jwtVerifier(claims);

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
