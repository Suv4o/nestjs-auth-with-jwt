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

  jwtVerifier(permissions) {
    this.oktaJwtVerifier = new OktaJwtVerifier({
      issuer: this.authConfig.issuer,
      clientId: this.authConfig.clientId,
      assertClaims: {
        'permissions.includes': permissions,
      },
    });
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    this.jwtVerifier(permissions);

    const token = context.getArgs()[0]?.headers?.authorization.split(' ')[1];
    return this.oktaJwtVerifier
      .verifyAccessToken(token, this.authConfig.audience)
      .then((details) => {
        console.log(details);
        return true;
      })
      .catch((err) => {
        console.log(err);
        throw new UnauthorizedException();
      });
  }
}
